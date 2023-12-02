<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2019-08-22 19:41:20
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-02 20:00:22
 * @FilePath: /what-to-eat/pages/index/index.vue
 * @Description: 
-->
<template>
  <view>
    <view class="h-screen relative z-10">
      <view style="text-align: right; padding-right: 30rpx">
        <view class="go-menu-page iconfont icon-bianji" @click="goMyMenu"></view>
      </view>

      <image class="logo" src="../../static/logo.svg" mode="scaleToFill" />

      <view class="main">
        <view class="menu-text">吃{{ menuText }}!</view>

        <button class="wte-btn primary">点击开始</button>

        <view class="menu-scope text-ellipsis overflow-hidden"> 当前菜单范围：{{ currentCategoryText }} </view>

        <view class="modify-menu-scope"> 修改菜单范围 </view>
      </view>
    </view>

    <view class="fixed flex flex-wrap w-full h-screen top-0">
      <view v-for="(menu, index) in reaolveBgMenuList" :key="index" class="fixed-menu flex items-center justify-center">
        <template v-if="index != 4">{{ menu.name }}</template>
      </view>
    </view>
  </view>
</template>

<script>
import { MENU_DATA_LIST } from '../../config/menu-data';

export default {
  components: {},

  data() {
    return {
      menuText: '鸡腿',
      currentCategoryIdList: ['zaocan', 'wucan', 'wancan', 'huangmenji', 'kendeji']
    };
  },

  computed: {
    currentCategoryText() {
      let categoryGroup = this.$store.getters.categoryGroup;

      return categoryGroup.map(e => e.name).join('、');
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

      return getRandomObjectsFromArray(MENU_DATA_LIST, 9);
    }
  },

  onLoad() {},

  methods: {
    goMyMenu() {
      uni.navigateTo({ url: '/pages/my-menu/my-menu' });
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
  color: rgba(18, 18, 18, 0.05);
  transform: rotate(30deg);
  word-break: keep-all;
  width: 33.33333%;
}
</style>
