<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-12-01 15:14:56
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-05 10:57:26
 * @FilePath: /what-to-eat/components/wte-action-sheet/wte-action-sheet.vue
 * @Description: 
-->
<template>
  <u-action-sheet
    :actions="actions"
    :title="title || options.title"
    :show="show"
    :closeOnClickAction="true"
    :round="12"
    :closeOnClickOverlay="true"
    @close="onClose"
    @select="onSelect"
  ></u-action-sheet>
</template>

<script>
export default {
  name: 'wte-action-sheet',

  // components:{},

  props: {
    title: {
      type: String
    },
    actions: {
      type: Array
    }
  },

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
    open(options = {}) {
      this.show = true;
      this.options = options;
    },
    onClose() {
      this.show = false;
    },
    onSelect(item) {
      if (this.options.onSelect) {
        this.options.onSelect(item);
      }
    }
  }

  // watch: {},

  // filters: {},
};
</script>

<style lang="less" scoped></style>
