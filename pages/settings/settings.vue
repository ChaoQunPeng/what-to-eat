<template>
  <view class="list pt-40">
    <view class="cell flex items-center justify-between px-24">
      <view class="text">是否自动停止</view>
      <u-switch v-model="isAutoStopRandomTimer" :active-color="'#ee0c24'" :inactive-color="'#BFBFBF'" @change="change" />
    </view>
  </view>
</template>

<script>
import { WET_IS_AUTO_STOP_RANDOM_TIMER } from '../../config/constant';

export default {
  data() {
    return {
      isAutoStopRandomTimer: false
    };
  },

  mounted() {
    this.isAutoStopRandomTimer = uni.getStorageSync(WET_IS_AUTO_STOP_RANDOM_TIMER);
  },

  methods: {
    change() {
      uni.setStorageSync(WET_IS_AUTO_STOP_RANDOM_TIMER, this.isAutoStopRandomTimer);
    }
  }
};
</script>

<style lang="less">
.list {
  .cell {
    height: 72rpx;
  }
}
</style>
