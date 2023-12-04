<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-12-01 12:55:17
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-04 21:58:37
 * @FilePath: /what-to-eat/components/wte-side-list-popup/wte-side-list-popup.vue
 * @Description: 
-->
<template>
  <u-popup :show="show" mode="right" :closeOnClickOverlay="true" @close="popOnClose" @open="popOnOpen">
    <view class="pop-container flex flex-col h-full">
      <view class="header flex items-center pt-40 pb-30 px-26">
        <view class="iconfont icon-guanbi-xiao"></view>
        <view class="flex-1 text-center text-size-32 font-medium leading-none">
          {{ options.title }}
        </view>
        <view class="iconfont icon-tianjia"></view>
      </view>
      <view class="body flex-1">
        <u-swipe-action>
          <u-swipe-action-item v-for="item in listData" :key="item.id" :disabled="true" :options="swipeActionOptions">
            <view class="swipe-item flex h-88" @click="clickItem(item)">
              <view class="w-32"></view>
              <view class="content flex flex-1 items-center">
                <view class="text-size-28">{{ item.name }}</view>
                <view v-show="item.isChecked" class="iconfont icon-xiaoyan ml-auto text-red font-bold"></view>
              </view>
              <view class="w-32"></view>
            </view>
          </u-swipe-action-item>
        </u-swipe-action>
      </view>

      <view class="foot mx-30 my-30">
        <button class="wte-btn primary" @click="ok">确定</button>
      </view>
    </view>
  </u-popup>
</template>

<script>
export default {
  name: 'wte-side-list-popup',

  // components:{},

  props: {
    list: {
      type: Array
    },
    checkedKeys: {
      type: Array
    }
  },

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
      ],
      listData: []
    };
  },

  // computed: {},

  created() {
    this.listData = this.$clone(this.list);

    this.listData.forEach(e => {
      this.$set(e, 'isChecked', false);
    });

    console.log(this);
  },

  // mounted() {},

  methods: {
    open(options) {
      this.options = options;
      this.show = true;
    },
    popOnOpen() {},
    popOnClose() {
      this.show = false;
    },
    setChecked() {
      this.listData.forEach(e => {
        if (this.checkedKeys.includes(e.id)) {
          e.isChecked = true;
        }
      });
    },
    clickItem(item) {
      item.isChecked = !item.isChecked;
    },
    ok() {
      let result = this.listData.filter(e => e.isChecked);

      this.$emit('ok', result);

      this.options.onOk && this.options.onOk(result);

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
