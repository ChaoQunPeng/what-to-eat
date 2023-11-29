<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2019-04-01 01:47:12
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-11-29 16:10:04
 * @FilePath: /what-to-eat/App.vue
 * @Description: 
-->
<script>
export default {
  onLaunch: function () {
    console.log('App Launch');
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  }
};
</script>

<style >
/*每个页面公共css */
@import './static/iconfont/iconfont.css';

@import './static/theme/common.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
