<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-12-03 16:47:03
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-05 10:57:21
 * @FilePath: /what-to-eat/components/wte-popup/wte-popup.vue
 * @Description: 
-->
<template>
  <u-popup :show="show" mode="right" :closeOnClickOverlay="true" @open="onOpen" @close="onClose">
    <slot></slot>
  </u-popup>
</template>

<script>
export default {
  name: 'wte-popup',

  // components:{},

  // props: {},

  data() {
    return {
      show: false
    };
  },

  // computed: {},

  // created() {},

  // mounted() {},

  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
    onOpen() {},
    onClose() {
      this.show = false;
    }
  }

  // watch: {},

  // filters: {},
};
</script>

<style lang="less" scoped></style>
