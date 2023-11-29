<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-11-29 18:03:04
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-11-29 20:53:35
 * @FilePath: /what-to-eat/pages/my-menu/my-menu.vue
 * @Description: 
-->
<template>
  <view>
    <view class="font-bold flex mr-0 m-2 p-[16px] flex-1 flex mr-10">Hello world!</view>

    <view class="action-area">
      <view class="action-box">
        <view class="category-text" @click="goCategoryText">分类管理</view>
        <view class="divider"></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    goCategoryText() {}
  }
};
</script>

<style lang="less">
page {
  background: var(--wte-page-bg-color);
}

.action-area {
  display: flex;
  justify-content: flex-end;

  .action-box {
    display: flex;
    align-items: center;
    height: 36rpx;
  }

  .divider {
    width: 1px;
    height: 28rpx;
    background: #cccccc;
  }
}
</style>
