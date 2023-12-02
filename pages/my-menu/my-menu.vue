<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-11-29 18:03:04
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-02 20:06:07
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
      <template v-for="(item, index) in pageDataList">
        <view v-if="viewType == 'byMenu'" :key="index" class="menu-card mb-30 py-28 px-30 bg-white rounded-radius-20">
          <view class="header flex items-center">
            <view class="text-size-36 font-medium leading-none">{{ item.name }}</view>
            <view class="iconfont icon-gengduo ml-auto" @click="clickCardMore({ source: 'menu', item })"> </view>
          </view>

          <div class="mt-30 font-normal text-size-24 text-black-45">分类：{{ item.list }}</div>
        </view>

        <view
          v-else-if="viewType == 'byCategory'"
          :key="index"
          class="menu-card mb-30 py-28 px-30 bg-white rounded-radius-20"
        >
          <view class="header flex items-center">
            <view class="text-size-36 font-medium leading-none">{{ item.name }}</view>
            <view class="iconfont icon-gengduo ml-auto"></view>
          </view>

          <div class="mt-30 font-normal text-size-24 text-black-45">食物：{{ item.list }}</div>
        </view>
      </template>
    </view>

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
import { WET_MENU_DATA } from '../../config/constant';

export default {
  data() {
    return {
      viewType: 'byMenu',
      dataList: [],
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

  computed: {
    pageDataList() {
      if (this.viewType == 'byMenu') {
        return this.$store.getters.menuGroupList;
      } else if (this.viewType == 'byCategory') {
        return this.$store.getters.categoryGroupList;
      }
    }
  },

  onLoad() {
    this.dataList = uni.getStorageSync(WET_MENU_DATA);
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
        onSelect: selectItem => {
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
