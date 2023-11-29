<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2019-08-22 19:41:20
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-11-29 21:12:10
 * @FilePath: /what-to-eat/pages/index/index.vue
 * @Description: 
-->
<template>
  <view>
    <view style="text-align: right; padding-right: 30rpx">
      <view class="go-menu-page iconfont icon-bianji" @click="goMyMenu"></view>
    </view>

    <image class="logo" src="../../static/logo.svg" mode="scaleToFill" />

    <view class="main">
      <view class="menu-text">吃{{ menuText }}!</view>

      <button class="wte-btn primary">点击开始</button>

      <view class="menu-scope"> 当前菜单范围：全部、减脂、川菜、鸡肉、麦当... </view>

      <view class="modify-menu-scope"> 修改菜单范围 </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},

    data() {
      return {
        menuText: '鸡腿'
      };
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
    font-size: 24px;
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
        color: #709dff;
      }
    }
  }
</style>
