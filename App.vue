<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2019-04-01 01:47:12
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-04 17:06:25
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

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import "@/uni_modules/uview-ui/index.scss";
</style>

<style>
/*每个页面公共css */
@import './static/iconfont/iconfont.css';

@import './static/theme/index.less';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* #ifdef H5 */
uni-page-head {
  display: none;
}
/* #endif */
</style>
