<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-12-05 20:29:00
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-05 22:08:41
 * @FilePath: /what-to-eat/pages/food-form/food-form.vue
 * @Description: 
-->
<template>
  <view>
    <view class="mt-30 px-40">
      <u-input
        placeholder="请输入食物名称"
        placeholder-class="placeholder-text-right"
        class="name-input"
        v-model.trim="name"
        maxlength="15"
      >
        <template slot="suffix">
          <button class="wte-btn primary" @click="ok">确定</button>
        </template>
      </u-input>
    </view>

    <view class="mt-30 mx-40 -mb-20 px-20 rounded-lg bg-white">
      <view v-for="(food, index) in foodList" :key="index" class="food-tag">
        {{ food.food }}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      pageOptions: null,
      foodList: []
    };
  },

  onLoad(options) {
    this.pageOptions = JSON.parse(decodeURIComponent(options.params));
    uni.setNavigationBarTitle({ title: this.pageOptions.menuName });
    this.foodList = this.$store.getters.categoryList.find(e => e.id == this.pageOptions.menuId).list;
  },

  methods: {
    ok() {
      this.$store.commit('createFood', {
        menuId: this.pageOptions.menuId,
        menuName: this.pageOptions.menuName,
        foodName: this.name
      });
    }
  }
};
</script>

<style lang="less">
page {
  background: #fafafa;
}

/deep/ .u-input__content__subfix-icon {
  margin-left: 20rpx;
}

/deep/ .u-input {
  background: #fff;
}

.wte-btn.primary {
  border-radius: 8rpx;
  padding: 12rpx 30rpx;
  font-size: 28rpx;
}

.placeholder-text-right {
  font-weight: 300 !important;
}

.food-tag {
  display: inline-flex;
  border-radius: 6rpx;
  border: 1px solid #ee0a24;
  padding: 10rpx 20rpx;
  line-height: 1;
  color: #ee0a24;
  margin-right: 14rpx;
  margin-bottom: 14rpx;
}

.save-btn {
  padding-bottom: 60rpx;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
