<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2019-08-22 19:41:20
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2024-01-04 18:50:43
 * @FilePath: /what-to-eat/pages/index/index.vue
 * @Description: 
-->
<template>
  <view>
    <view class="h-screen relative z-10">
      <image class="logo" src="../../static/logo.svg" mode="scaleToFill" />

      <view class="main">
        <view class="menu-text text-center">
          <template v-if="menuText"> 吃{{ menuText }}! </template>
          <template v-else>吃什么呢?</template>
        </view>

        <button class="wte-btn primary text-size-36" @click="randomFood">
          <view class="flex items-center" v-if="timer">
            <view>点击停止</view>
            <view class="text-size-24" v-if="autoStopRandomTimer">（{{ autoStopRandomTimeVal }}秒后自动停止） </view>
          </view>
          <template v-else>点击开始</template>
        </button>

        <view
          class="menu-scope mb-17 text-size-32 font-normal text-center text-black overflow-hidden text-ellipsis whitespace-nowrap"
          style="width: 80%"
        >
          当前范围：{{ currentMenuText }}
        </view>

        <view class="modify-menu-scope" @click="modifyMenuScope"> 修改范围 </view>
      </view>
    </view>

    <view class="fixed flex flex-wrap w-full h-screen top-0">
      <view v-for="(menu, index) in reaolveBgMenuList" :key="index" class="fixed-menu flex items-center justify-center">
        <template>{{ menu.name }}</template>
      </view>
    </view>

    <view
      :style="{ bottom: resolveGoMenuBtnBottom }"
      class="go-menu-page iconfont icon-bianji fixed flex items-center justify-center text-white bg-red rounded-full right-50 z-10"
      @click="goMyMenu"
    ></view>

    <!-- 修改范围的弹框 -->
    <wte-popup ref="modifyScope">
      <view class="modify-scope h-full flex flex-col">
        <view class="header flex items-center pt-40 pb-30 px-26">
          <view class="flex-1 text-center text-size-32 font-medium leading-none"> 修改范围 </view>
        </view>

        <view class="body">
          <view class="collapse-box" v-for="(menu, index) in currentMenuScopeList" :key="index">
            <view class="header flex items-center" @click="clickMenu(menu)">
              <view>
                <u-checkbox-group v-model="menu.isChecked" placement="column" activeColor="#ee0a24" shape="circle">
                  <u-checkbox :name="1"> </u-checkbox>
                </u-checkbox-group>
              </view>
              <view class="ml-10">{{ menu.name }}</view>
            </view>
          </view>
        </view>
        <view class="foot mx-30 my-30">
          <button class="wte-btn primary" @click="modifyMenu">确定</button>
        </view>
      </view>
      <u-toast ref="uToast"></u-toast>
    </wte-popup>
  </view>
</template>

<script>
import { MENU_DATA_LIST } from '../../config/menu-data';

export default {
  components: {},

  data() {
    return {
      menuText: '',
      currentCategoryIdList: ['wucan', 'wancan', 'shuiguo'],
      currentMenuScopeList: [],
      timer: null,
      autoStopRandomTimeVal: 3,
      autoStopRandomTimer: null
    };
  },

  computed: {
    /**
     * 控制前往我的菜单的按钮的底部距离
     */
    resolveGoMenuBtnBottom() {
      let bottom = uni.getSystemInfoSync().safeAreaInsets.bottom;

      return bottom + 50 + 'rpx';
    },
    /**
     * 当前菜单范围文本
     */
    currentMenuText() {
      return this.$store.state.dataList
        .filter(e => this.currentCategoryIdList.includes(e.id))
        .map(e => e.name)
        .join('、');
    },
    /**
     * 决定背景的菜单列表
     */
    reaolveBgMenuList() {
      function getRandomObjectsFromArray(arr, n) {
        var result = new Array(n),
          len = arr.length,
          taken = new Array(len);
        if (n > len) throw new RangeError('getRandomObjectsFromArray: more elements requested than available');
        while (n--) {
          var x = Math.floor(Math.random() * len);
          result[n] = arr[x in taken ? taken[x] : x];
          taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
      }

      return getRandomObjectsFromArray(MENU_DATA_LIST, 18);
    }
  },

  created() {},

  onShow() {
    this.currentMenuScopeList = JSON.parse(JSON.stringify(this.$store.state.dataList));

    this.currentCategoryIdList = this.currentCategoryIdList.filter(e => {
      return this.currentMenuScopeList.findIndex(el => el.id == e) > -1;
    });

    this.currentMenuScopeList.forEach(e => {
      this.$set(e, 'isChecked', this.currentCategoryIdList.includes(e.id) ? [1] : []);
    });
  },

  onShareAppMessage() {},

  mounted() {},

  methods: {
    /**
     * @description: 前往我的菜单
     * @return {*}
     */
    goMyMenu() {
      this.stopRandom();
      this.stopAutoStopRandomTime();

      uni.navigateTo({ url: '/pages/my-menu/my-menu' });
    },
    /**
     * @description: 随机筛选一个食物
     * @return {*}
     */
    randomFood() {
      if (this.timer) {
        this.stopRandom();
        this.stopAutoStopRandomTime();
        return;
      }

      let menuList = this.$store.state.dataList;
      let randomList = [];

      menuList.forEach(e => {
        if (this.currentCategoryIdList.includes(e.id)) {
          randomList = [...randomList, ...e.foodList];
        }
      });

      randomList = randomList.map(e => e.name);

      // 启动随机食物
      this.timer = setInterval(() => {
        console.log(2);
        let randomIndex = Math.floor(Math.random() * randomList.length);

        if (this.menuText != randomList[randomIndex]) {
          this.menuText = randomList[randomIndex];
        }
      }, 50);

      // 启动倒计时停止
      this.autoStopRandomTimer = setInterval(() => {
        console.log(1);
        this.autoStopRandomTimeVal--;

        if (this.autoStopRandomTimeVal == 0) {
          this.stopRandom();
          this.stopAutoStopRandomTime();
        }
      }, 1000);
    },
    /**
     * @description: 停止随机
     * @return {*}
     */
    stopRandom() {
      clearInterval(this.timer);
      this.timer = null;
    },
    /**
     * @description: 停止随机
     * @return {*}
     */
    stopAutoStopRandomTime() {
      clearInterval(this.autoStopRandomTimer);
      this.autoStopRandomTimer = null;
      this.autoStopRandomTimeVal = 3;
    },
    /**
     * @description: 修改菜单范围
     * @return {*}
     */
    modifyMenuScope() {
      this.currentMenuScopeList = JSON.parse(JSON.stringify(this.$store.state.dataList));

      this.currentMenuScopeList.forEach(e => {
        this.$set(e, 'isChecked', this.currentCategoryIdList.includes(e.id) ? [1] : []);
      });

      this.$refs.modifyScope.open();
    },
    /**
     * @description: 点击修改范围里的菜单
     * @param {*} menu
     * @return {*}
     */
    clickMenu(menu) {
      if (menu.isChecked === undefined) {
        this.$set(menu, 'isChecked', []);
      }

      this.$set(menu, 'isChecked', menu.isChecked.length == 0 ? [1] : []);
    },
    /**
     * @description: 修改菜单范围确认
     * @return {*}
     */
    modifyMenu() {
      if (this.currentMenuScopeList.filter(e => e.isChecked?.length > 0).length == 0) {
        this.$refs.uToast.show({
          message: '至少要选择一个分类哦~'
        });
        return;
      }

      this.stopRandom();
      this.stopAutoStopRandomTime();

      this.currentCategoryIdList = this.currentMenuScopeList.filter(e => e.isChecked?.length > 0).map(e => e.id);

      this.currentMenuScopeList.forEach(e => {
        this.$set(e, 'isChecked', this.currentCategoryIdList.includes(e.id) ? [1] : []);
      });

      this.$refs.modifyScope.close();
    }
  }
};
</script>

<style></style>

<style lang="less">
page {
  background: #fafafa;
}

.go-menu-page {
  width: 80rpx;
  height: 80rpx;
  font-size: 40rpx;
  box-shadow: 0 0 1px #ee0c24;
}

.logo {
  width: 100%;
  height: 48rpx;
  margin-top: 50rpx;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 276rpx;

  .menu-text {
    font-size: 64rpx;
    font-weight: bold;
    line-height: 1.4;
    margin-bottom: 65rpx;
  }

  .wte-btn {
    margin-bottom: 42rpx;
    font-size: 36rpx;
    padding: 28rpx 72rpx;
  }

  .modify-menu-scope {
    font-size: 28rpx;
    font-weight: 400;
    line-height: 1.4;
    color: rgba(168, 168, 168, 1);

    &:active {
      color: #ee0a24;
    }
  }
}

.fixed-menu {
  color: rgba(18, 18, 18, 0.04);
  transform: rotate(30deg);
  word-break: keep-all;
  width: 33.33333%;
}

.modify-scope {
  width: calc(100vw - 200rpx);

  .collapse-box {
    border-bottom: 1px solid rgba(18, 18, 18, 0.05);

    .header {
      padding: 28rpx 20rpx;
    }

    .body {
      > view {
        position: relative;
        padding: 20rpx 20rpx 20rpx 40rpx;

        &:active {
          background: #f0f0f0;
        }

        &:last-child {
          &::after {
            display: none;
          }
        }

        &::after {
          content: '';
          width: 100%;
          height: 1px;
          display: flex;
          bottom: 0;
          position: absolute;
          left: 30rpx;
          background: #ddd;
        }
      }
    }
  }
}
</style>
