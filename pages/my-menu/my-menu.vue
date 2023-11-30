<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-11-29 18:03:04
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-11-30 19:07:51
 * @FilePath: /what-to-eat/pages/my-menu/my-menu.vue
 * @Description: 
-->
<template>
  <view>
    <view class="action-area mt-18 mb-20">
      <view class="action-box">
        <view class="mr-24 text-red text-size-24" @click="goCategoryText">分类管理</view>
        <view class="divider mr-24"></view>
        <view class="iconfont icon-paibanliebiaoqiehuan mr-24" @click="switchViewType"></view>
        <view class="iconfont icon-tianjia mr-40" @click="goMenuForm"></view>
      </view>
    </view>

    <!-- 菜单分组 -->
    <view class="menu-group-area px-40">
      <template v-for="i in 3">
        <view v-if="viewType == 'byMenu'" :key="i" class="menu-card mb-30 py-28 px-30 bg-white rounded-radius-20">
          <view class="header flex items-center">
            <view class="text-size-36 font-medium leading-none">沙县小吃</view>
            <view class="iconfont icon-gengduo ml-auto" @click="clickCardMore({ source: 'menu', item: i })"></view>
          </view>

          <div class="mt-30 font-normal text-size-24 text-black-45">分类：早餐、面条、卤味</div>
        </view>

        <view v-else :key="i" class="menu-card mb-30 py-28 px-30 bg-white rounded-radius-20">
          <view class="header flex items-center">
            <view class="text-size-36 font-medium leading-none">早餐</view>
            <view class="iconfont icon-gengduo ml-auto"></view>
          </view>

          <div class="mt-30 font-normal text-size-24 text-black-45">食物：面条、包子、豆浆</div>
        </view>
      </template>
    </view>

    <u-action-sheet
      :actions="list"
      :title="actionSheetTitle"
      :show="showActionSheet"
      :closeOnClickAction="true"
      :closeOnClickOverlay="true"
      @close="showActionSheet = false"
      @select="actionSheetOnSelect"
    ></u-action-sheet>

    <u-modal :show="showModel" content="您确定删除？" showCancelButton @cancel="cancel" @confirm="confirm"></u-modal>
  </view>
</template>

<script>
export default {
  data() {
    return {
      viewType: 'byMenu',
      actionSheetTitle: '',
      list: [
        {
          name: '编辑',
          code: 'edit'
        },
        {
          name: '删除',
          code: 'delete'
        }
      ],
      showActionSheet: false,
      showModel: false
    };
  },

  methods: {
    /**
     * @description: 切换视图类型
     * @return {*}
     */
    switchViewType() {
      this.viewType = this.viewType == 'byMenu' ? 'byCategory' : 'byMenu';
    },
    /**
     * @description: 前往菜单表单
     * @return {*}
     */
    goMenuForm() {
      uni.navigateTo({ url: '/pages/menu-form/menu-form' });
    },
    /**
     * @description: 点击卡片更多操作
     * @param {*} source
     * @param {*} item
     * @return {*}
     */
    clickCardMore({ source, item }) {
      this.showActionSheet = true;
      this.actionSheetTitle = item.name;
    },
    /**
     * @description: 点击ActionSheet列表项时
     * @return {*}
     */
    actionSheetOnSelect(item) {
      if (item.code == 'delete') {
        this.showModel = true;
      }
    }
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
