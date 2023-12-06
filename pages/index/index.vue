<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2019-08-22 19:41:20
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-06 16:27:48
 * @FilePath: /what-to-eat/pages/index/index.vue
 * @Description: 
-->
<template>
  <view>
    <view class="h-screen relative z-10">
      <view class="text-right pr-30 mt-20">
        <view class="go-menu-page iconfont icon-bianji" @click="goMyMenu"></view>
      </view>

      <image class="logo" src="../../static/logo.svg" mode="scaleToFill" />

      <view class="main">
        <view class="menu-text">
          <template v-if="menuText"> 吃{{ menuText }}! </template>
          <template v-else>吃什么呢？</template>
        </view>

        <button class="wte-btn primary" @click="randomFood">
          <template v-if="timer">点击停止</template>
          <template v-else>点击开始</template>
        </button>

        <view class="menu-scope text-ellipsis overflow-hidden"> 当前范围：{{ currentCategoryText }} </view>

        <view class="modify-menu-scope" @click="modifyScope"> 修改范围 </view>
      </view>
    </view>

    <view class="fixed flex flex-wrap w-full h-screen top-0">
      <view v-for="(menu, index) in reaolveBgMenuList" :key="index" class="fixed-menu flex items-center justify-center">
        <template>{{ menu.name }}</template>
      </view>
    </view>

    <!-- <u-popup :show="true" ref="adasdsasa">
    </u-popup> -->

    <wte-popup ref="modifyScope">
      <view class="modify-scope h-full flex flex-col">
        <view class="header flex items-center pt-40 pb-30 px-26">
          <view class="flex-1 text-center text-size-32 font-medium leading-none"> 修改范围 </view>
        </view>

        <view class="body flex-1">
          <view class="collapse-box" v-for="(category, index) in currentScopeList" :key="index">
            <view class="header flex items-center" @click="headerClick(category)">
              <view>
                <u-checkbox-group v-model="category.isChecked" placement="column" activeColor="#ee0a24" shape="circle">
                  <u-checkbox :name="1"> </u-checkbox>
                </u-checkbox-group>
              </view>
              <view class="ml-10">{{ category.name }}</view>
            </view>
            <view class="body">
              <view
                v-for="(food, fIndex) in category.list"
                :key="fIndex"
                class="flex items-center"
                @click="clickFood(food, category)"
              >
                <view> {{ food.food }} </view>

                <!-- <u-checkbox-group
                  class="ml-auto"
                  v-model="food.isChecked"
                  placement="column"
                  activeColor="#ee0a24"
                  shape="circle"
                >
                  <u-checkbox :name="1"> </u-checkbox>
                </u-checkbox-group> -->

                <!-- <view
                  v-show="food.isChecked"
                  class="iconfont icon-xiaoyan ml-auto font-bold checked-icon text-red"
                ></view> -->
              </view>
            </view>
          </view>
        </view>
        <view class="foot mx-30 my-30">
          <button class="wte-btn primary" @click="modifyCagetory">确定</button>
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
      currentScopeList: [],
      timer: null
    };
  },

  computed: {
    currentCategoryText() {
      return this.$store.state.dataList
        .filter(e => this.currentCategoryIdList.includes(e.id))
        .map(e => e.name)
        .join('、');
    },
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

  created() {
    this.currentScopeList = JSON.parse(JSON.stringify(this.$store.state.dataList));

    this.currentScopeList.forEach(e => {
      this.$set(e, 'expand', false);
      this.$set(e, 'isChecked', this.currentCategoryIdList.includes(e.id) ? [1] : []);
    });
  },

  mounted() {},

  methods: {
    goMyMenu() {
      uni.navigateTo({ url: '/pages/my-menu/my-menu' });
    },
    /**
     * @description: 随机筛选一个食物
     * @return {*}
     */
    randomFood() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
        return;
      }

      let menuList = this.$store.state.dataList;
      let randomList = [];
      // let foodList = [];

      menuList.forEach(e => {
        if (this.currentCategoryIdList.includes(e.id)) {
          randomList = [...randomList, ...e.foodList];
        }
      });

      randomList = randomList.map(e => e.name);

      // foodList = categoryList
      //   .filter(e => this.currentCategoryIdList.includes(e.id))
      //   .reduce((acc, cur) => {
      //     return (acc = [...acc, ...cur.list]);
      //   }, [])
      //   .map(e => e.food);

      // randomList = Array.from(new Set(foodList));

      this.timer = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * randomList.length);

        if (this.menuText != randomList[randomIndex]) {
          this.menuText = randomList[randomIndex];
        }
      }, 50);
    },
    /**
     * @description: 修改范围
     * @return {*}
     */
    modifyScope() {
      this.currentScopeList.forEach(e => {
        this.$set(e, 'isChecked', this.currentCategoryIdList.includes(e.id) ? [1] : []);
      });

      this.$refs.modifyScope.open();
    },
    headerClick(category) {
      if (category.isChecked === undefined) {
        this.$set(category, 'isChecked', []);
      }

      this.$set(category, 'isChecked', category.isChecked.length == 0 ? [1] : []);

      // category.list.forEach(food => {
      //   this.$set(food, 'isChecked', category.isChecked);
      // });
    },
    clickFood(food, category) {
      // if (food.isChecked === undefined) {
      //   this.$set(food, 'isChecked', []);
      // }
      // this.$set(food, 'isChecked', food.isChecked.length == 0 ? [1] : []);
      // if (category.list.every(food => food.isChecked?.length > 0)) {
      //   category.isChecked = [1];
      // } else if (category.list.every(food => food.isChecked?.length == 0)) {
      //   category.isChecked = [];
      // } else {
      //   category.isChecked = [];
      // }
    },
    modifyCagetory() {
      if (this.currentScopeList.filter(e => e.isChecked?.length > 0).length == 0) {
        this.$refs.uToast.show({
          message: '至少要选择一个分类哦~'
        });
        return;
      }

      this.currentCategoryIdList = this.currentScopeList.filter(e => e.isChecked?.length > 0).map(e => e.id);
      this.currentScopeList.forEach(e => {
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
  font-size: 42rpx;
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
  padding-top: 237rpx;

  .menu-text {
    font-size: 64rpx;
    font-weight: bold;
    line-height: 1.4;
    margin-bottom: 65rpx;
  }

  .wte-btn {
    margin-bottom: 42rpx;
    font-size: 32rpx;
  }

  .menu-scope {
    font-size: 28rpx;
    font-weight: 400;
    line-height: 1.4;
    color: #121212;
    margin-bottom: 17rpx;
  }

  .modify-menu-scope {
    font-size: 24rpx;
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
      padding: 16rpx 20rpx;
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
