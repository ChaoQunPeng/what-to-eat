<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-12-05 20:29:00
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-06 17:21:32
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
          <view @touchend.prevent>
            <button class="wte-btn primary" @click="ok">确定</button>
          </view>
        </template>
      </u-input>
    </view>

    <view class="mt-30 mx-40 px-20 pt-20 rounded-lg bg-white">
      <template v-if="pageFoodList.length > 0">
        <view v-for="(food, index) in pageFoodList" :key="index" class="food-tag">
          {{ food.name }} <view class="iconfont icon-guanbi-xiao ml-10" @click="deleteFood(food)"></view>
        </view>
      </template>
      <template v-else>
        <view class="pb-20 text-size-28 text-black-65">还没有食物呢~</view>
      </template>
    </view>

    <u-toast ref="uToast"></u-toast>
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
    this.getFoodList();
  },

  computed: {
    pageFoodList() {
      return this.$store.state.dataList.find(e => e.id == this.pageOptions.menuId).foodList;
    }
  },

  methods: {
    getFoodList() {
      this.foodList = this.$store.state.dataList.find(e => e.id == this.pageOptions.menuId).foodList;
    },
    deleteFood(food) {
      this.$store.commit('deleteFood', { menuId: this.pageOptions.menuId, foodId: food.id });
    },
    ok() {
      if (!this.name) {
        this.$refs.uToast.show({
          message: '食物名称不能为空哦~'
        });

        return;
      }

      this.$store.commit('createFood', {
        menuId: this.pageOptions.menuId,
        foodName: this.name
      });
      this.name = '';
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
  margin-right: 20rpx;
  margin-bottom: 20rpx;
}

.save-btn {
  padding-bottom: 60rpx;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
