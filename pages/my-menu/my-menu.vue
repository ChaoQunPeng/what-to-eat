<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-11-29 18:03:04
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-01 21:47:18
 * @FilePath: /what-to-eat/pages/my-menu/my-menu.vue
 * @Description: 
-->
<template>
  <view>
    <view class="flex items-center h-60 mx-40 mb-20">
      <view class="tabs flex items-end">
        <view :class="{ actived: viewType == 'byMenu' }" @click="viewType = 'byMenu'">
          <view>菜单</view>
        </view>
        <view :class="{ actived: viewType == 'byCategory' }" @click="viewType = 'byCategory'">
          <view>分类</view>
        </view>
      </view>

      <view class="iconfont icon-tianjia ml-auto" @click="goMenuForm"></view>
    </view>

    <!-- 菜单分组 -->
    <view class="menu-group-area px-40">
      <template v-for="i in 3">
        <view v-if="viewType == 'byMenu'" :key="i" class="menu-card mb-30 py-28 px-30 bg-white rounded-radius-20">
          <view class="header flex items-center">
            <view class="text-size-36 font-medium leading-none">沙县小吃</view>
            <view class="iconfont icon-gengduo ml-auto" @click="clickCardMore({ source: 'menu', item: i })"> </view>
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

    <!-- <u-action-sheet
      :actions="list"
      :title="actionSheetTitle"
      :show="showActionSheet"
      :closeOnClickAction="true"
      :closeOnClickOverlay="true"
      @close="showActionSheet = false"
      @select="actionSheetOnSelect"
      ></u-action-sheet> -->

    <wte-action-sheet ref="actionSheet" :actions="list"></wte-action-sheet>
    <wte-modal ref="confirmDeleteModal"></wte-modal>
    <wte-modal ref="editModal">
      <u-input
        placeholder="请输入"
        placeholder-class="placeholder-text-right"
        class="name-input"
        border="bottom"
        v-model="itemName"
      ></u-input>
    </wte-modal>
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
      itemName: ''
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
      this.$refs.actionSheet.open({
        title: item.name ?? '菜单或食材',
        onSelect: (selectItem) => {
          if (selectItem.code == 'delete') {
            this.$refs.confirmDeleteModal.open({
              content: `确定要删除${item.name}吗？`,
              showCancelButton: true
            });
          } else if (selectItem.code == 'edit') {
            this.$refs.editModal.open({
              title: `编辑`,
              showCancelButton: true
            });
          }
        }
      });
    },
    /**
     * @description: 点击ActionSheet列表项时
     * @return {*}
     */
    actionSheetOnSelect(item) {}
  }
};
</script>

<style lang="less">
page {
  background: #fafafa;
}

.tabs {
  > view {
    position: relative;
    margin-right: 30rpx;
    font-size: 32rpx;
    font-weight: 400;
    color: rgba(18, 18, 18, 0.45);
    transition: all 0.2s;

    &.actived {
      font-size: 40rpx;
      color: rgba(18, 18, 18);

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 5px;
        width: 100%;
        height: 12rpx;
        background: #ee0a24;
      }
    }

    > view {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
