<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-12-01 12:55:17
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-03 17:07:52
 * @FilePath: /what-to-eat/components/side-list-popup/side-list-popup.vue
 * @Description: 
-->
<template>
  <u-popup :show="show" mode="right" :closeOnClickOverlay="true" @close="popOnClose" @open="popOnOpen">
    <view class="pop-container">
      <view class="header flex items-center pt-40 pb-30 px-26">
        <view class="iconfont icon-guanbi-xiao"></view>
        <view class="flex-1 text-center text-size-32 font-medium leading-none">
          {{ options.title }}
        </view>
        <view class="iconfont icon-tianjia"></view>
      </view>
      <view class="body">
        <u-swipe-action>
          <u-swipe-action-item :options="swipeActionOptions">
            <view class="swipe-item flex h-88">
              <view class="w-32"></view>
              <view class="content flex flex-1 items-center">
                <view class="text-size-28">阿是</view>
                <view class="iconfont icon-xiaoyan ml-auto text-red font-bold"></view>
              </view>
              <view class="w-32"></view>
            </view>
          </u-swipe-action-item>

          <u-swipe-action-item :options="swipeActionOptions">
            <view class="swipe-item flex h-88">
              <view class="w-32"></view>
              <view class="content flex flex-1 items-center">
                <view class="text-size-28">阿是</view>
                <view class="iconfont icon-xiaoyan ml-auto text-red font-bold"></view>
              </view>
              <view class="w-32"></view>
            </view>
          </u-swipe-action-item>

          <u-swipe-action-item :options="swipeActionOptions">
            <view class="swipe-item flex h-88">
              <view class="w-32"></view>
              <view class="content flex flex-1 items-center">
                <view class="text-size-28">阿是</view>
                <view class="iconfont icon-xiaoyan ml-auto text-red font-bold"></view>
              </view>
              <view class="w-32"></view>
            </view>
          </u-swipe-action-item>
        </u-swipe-action>
      </view>
    </view>
  </u-popup>
</template>

<script>
export default {
  name: 'wte-side-list-popup',

  // components:{},

  // props: {},

  data() {
    return {
      show: false,
      options: {
        title: ''
      },
      swipeActionOptions: [
        {
          name: 'edit',
          text: '编辑',
          style: {
            backgroundColor: '#eea00a'
          }
        },
        {
          name: 'delete',
          text: '删除',
          style: {
            backgroundColor: '#ee0a24'
          }
        }
      ]
    };
  },

  // computed: {},

  // created() {},

  // mounted() {},

  methods: {
    open() {
      this.show = true;
    },
    popOnOpen() {},
    popOnClose() {
      this.show = false;
    }
  }

  // watch: {},

  // filters: {},
};
</script>

<style lang="less">
.pop-container {
  width: calc(100vw - 200rpx);
}

.swipe-item {
  transition: all 0.3s;

  .content {
    border-bottom: 1px solid rgba(235, 237, 240, 1);
  }

  &:active {
    background: #fafafa;
  }
}
</style>
