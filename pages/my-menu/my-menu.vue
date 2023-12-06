<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-11-29 18:03:04
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-06 17:17:34
 * @FilePath: /what-to-eat/pages/my-menu/my-menu.vue
 * @Description: 
-->
<template>
  <view>
    <!-- <view class="flex items-center h-60 mx-40 mb-20 mt-30">
      <view class="tabs flex items-end">
        <view :class="{ actived: viewType == 'byCategory' }" @click="viewType = 'byCategory'">
          <view>菜单</view>
        </view>
        <view :class="{ actived: viewType == 'byMenu' }" @click="viewType = 'byMenu'">
          <view>食物</view>
        </view>
      </view>

      <view class="iconfont icon-tianjia ml-auto text-size-36" @click="goMenuForm"></view>
    </view> -->

    <view class="flex flex-col h-screen">
      <view class="menu-group-area px-40 mt-30 flex-1 overflow-auto">
        <template v-for="(item, index) in pageDataList">
          <view :key="index" class="menu-card mb-30 py-28 px-30 bg-white rounded-radius-20">
            <view class="header flex items-center">
              <view class="text-size-36 font-medium leading-none relative">
                {{ item.name }}
              </view>
              <view class="iconfont icon-gengduo1 ml-auto" @click="clickCardMore({ source: 'food', item })"> </view>
            </view>

            <div class="mt-20 font-normal text-size-28 text-black-45">
              <template v-if="item.foodList.length > 0">
                {{ parseToText(item.foodList) }}
              </template>
              <template v-else>没有食物呢~</template>
            </div>
          </view>
        </template>
      </view>

      <view class="px-40 safe-area">
        <button class="wte-btn primary text-size-32" @click="opeMenuForm">添加菜单</button>
      </view>
    </view>

    <wte-action-sheet ref="actionSheet" :actions="list"></wte-action-sheet>

    <wte-modal ref="confirmDeleteModal"> </wte-modal>

    <wte-modal ref="nameModal">
      <u-input
        placeholder="请输入"
        placeholder-class="placeholder-text-right"
        class="name-input"
        border="bottom"
        v-model.trim="menuName"
        maxlength="10"
        :cursorSpacing="50"
      ></u-input>
    </wte-modal>
  </view>
</template>

<script>
import { WET_MENU_DATA } from '../../config/constant';

export default {
  data() {
    return {
      viewType: 'byCategory',
      dataList: [],
      list: [
        {
          name: '编辑食物',
          code: 'editFood'
        },
        {
          name: '重命名',
          code: 'rename'
        },
        {
          name: '删除',
          code: 'delete',
          color: '#ee0a24'
        }
      ],
      showActionSheet: false,
      menuName: ''
    };
  },

  computed: {
    pageDataList() {
      return this.$store.state.dataList;
    },
    parseToText() {
      return function (list) {
        return list.map(e => e.name).join('、');
      };
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
     * @description: 新建菜单
     * @return {*}
     */
    opeMenuForm() {
      this.$refs.nameModal.open({
        title: `新建菜单`,
        showCancelButton: true,
        onConfirm: () => {
          this.$store.commit('createMenu', { name: this.menuName });
          this.menuName = '';
        }
      });
    },
    /**
     * @description: 点击卡片更多操作
     * @param {*} source
     * @param {*} item
     * @return {*}
     */
    clickCardMore({ source, item }) {
      this.$refs.actionSheet.open({
        title: item.name,
        onSelect: selectItem => {
          if (selectItem.code == 'editFood') {
            let params = {
              menuId: item.id,
              menuName: item.name
            };

            uni.navigateTo({
              url: `/pages/food-form/food-form?params=${encodeURIComponent(JSON.stringify(params))}`
            });
          } else if (selectItem.code == 'delete') {
            this.$refs.confirmDeleteModal.open({
              title: `系统通知`,
              content: `确定要删除【${item.name}】菜单吗？`,
              showCancelButton: true,
              onConfirm: () => {
                this.$store.commit('deleteMenu', item.id);
              }
            });
          } else if (selectItem.code == 'rename') {
            this.menuName = item.name;
            this.$refs.nameModal.open({
              title: `重命名`,
              showCancelButton: true,
              onConfirm: () => {
                this.$store.commit('updateMenuData', { id: item.id, name: this.menuName });
                this.menuName = '';
              }
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

.safe-area {
  padding-bottom: 60rpx;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

.wte-btn {
  border-radius: 8rpx !important;
  padding: 24rpx 64rpx !important;
}
</style>
