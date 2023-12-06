<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-12-01 14:48:04
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-06 17:14:51
 * @FilePath: /what-to-eat/components/wte-modal/wte-modal.vue
 * @Description: modal弹框
-->
<template>
  <u-modal
    :show="show"
    :title="options.title"
    :showCancelButton="options.showCancelButton"
    negativeTop="120"
    @cancel="onCancel"
    @confirm="onConfirm"
    @close="onClose"
  >
    <slot>
      {{ options.content }}
    </slot>
  </u-modal>
</template>

<script>
export default {
  name: 'wte-modal',

  // components:{},

  props: {},

  data() {
    return {
      show: false,
      options: {}
    };
  },

  // computed: {},

  // created() {},

  // mounted() {},

  methods: {
    /**
     * @description: 打开弹框
     * @return {*}
     */
    open(options = {}) {
      this.options = options;
      console.log(options);
      this.show = true;
    },
    /**
     * @description: 关闭弹框
     * @return {*}
     */
    close() {
      this.show = false;
    },
    /**
     * @description: 弹框关闭事件
     * @return {*}
     */
    onClose() {
      if (this.options.onClose) {
        this.options.onClose();
      }
    },
    /**
     * @description: 点击确认
     * @return {*}
     */
    onConfirm() {
      this.close();
      if (this.options.onConfirm) {
        this.options.onConfirm();
      }
    },
    /**
     * @description: 点击取消
     * @return {*}
     */
    onCancel() {
      this.close();

      if (this.options.onCancel) {
        this.options.onCancel();
      }
    }
  }

  // watch: {},

  // filters: {},
};
</script>

<style lang="less" scoped></style>
