<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-11-30 18:43:52
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-04 21:58:52
 * @FilePath: /what-to-eat/pages/menu-form/menu-form.vue
 * @Description: 
-->
<template>
  <view>
    <view class="bg-white mt-30">
      <u-cell-group>
        <u-cell title="食物名称">
          <u-input
            slot="right-icon"
            placeholder="请输入"
            placeholder-class="placeholder-text-right"
            class="name-input"
            border="none"
            v-model="name"
          ></u-input>

          <!-- <input placeholder="自动获得焦点" /> -->
        </u-cell>
      </u-cell-group>
    </view>

    <view class="flex items-end mt-36 ml-32">
      <view class="text-size-32 text-black mr-8">分类</view>
      <view class="text-size-28 text-black-45">(可不选或多选)</view>
    </view>

    <view class="my-10 ml-32">{{ checkedCategoryList.map(e => e.name).join('、') }}</view>

    <view class="flex items-center mt-14 ml-32">
      <view class="iconfont icon-tianjia text-red mr-6 text-size-32"></view>
      <view class="text-red text-size-30" @click="openCategoryList">点击选择</view>
    </view>

    <view class="flex justify-center pb-30 w-full save-btn fixed bottom-0">
      <button class="wte-btn primary mx-47 w-full" @click="save">保存</button>
    </view>

    <wte-side-list-popup ref="wteSideListPopup" :list="categoryList" :checked-keys="[]"></wte-side-list-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      checkedCategoryList: [],
      categoryList: []
    };
  },

  created() {
    // 判断是否有安全区
    // console.log(uni.getSystemInfoSync().safeAreaInsets.bottom);

    this.categoryList = JSON.parse(JSON.stringify(this.$store.getters.categoryList));
  },

  methods: {
    /**
     * @description: 打开类型列表
     * @return {*}
     */
    openCategoryList() {
      this.$refs.wteSideListPopup.setChecked();
      this.$refs.wteSideListPopup.open({
        title: `选择分类`,
        onOk: result => {
          this.checkedCategoryList = result;
        }
      });
    },
    /**
     * @description: 保存
     * @return {*}
     */
    save() {
      console.log(this.name);
    }
  }
};
</script>

<style lang="less">
page {
  background: #fafafa;
}

.placeholder-text-right {
  text-align: right !important;
  font-weight: 300 !important;
  color: #f00;
}

/deep/ .uni-input-input {
  text-align: right !important;
}

/deep/ .u-input__content__field-wrapper__field {
  text-align: right !important;
}

.save-btn {
  padding-bottom: 60rpx;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

.pop-container {
  width: calc(100vw - 200rpx);

  .swipe-item {
    height: 88rpx;
  }
}
</style>
