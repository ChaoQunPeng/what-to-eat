<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-11-29 18:03:04
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-11-29 19:09:04
 * @FilePath: /what-to-eat/pages/my-menu/my-menu.vue
 * @Description: 
-->
<template>
  <view>
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
