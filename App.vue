<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2019-04-01 01:47:12
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-05 15:53:39
 * @FilePath: /what-to-eat/App.vue
 * @Description: 
-->
<script>
import { WET_MENU_DATA } from './config/constant';

export default {
  created() {
    console.log(111);
    const dataList = [
      { foodId: 'banfen', food: '拌粉', categoryId: 'zaocan', category: '早餐' },
      { foodId: 'banfen', food: '拌粉', categoryId: 'wucan', category: '午餐' },
      { foodId: 'banfen', food: '拌粉', categoryId: 'wancan', category: '晚餐' },
      { foodId: 'zhujiaofan', food: '猪脚饭', categoryId: 'wucan', category: '午餐' },
      { foodId: 'zhujiaofan', food: '猪脚饭', categoryId: 'wancan', category: '晚餐' },
      { foodId: 'jirou', food: '鸡肉', categoryId: 'huangmenji', category: '黄焖鸡' },
      { foodId: 'jirou', food: '鸡肉', categoryId: 'kendeji', category: '肯德基' }
    ];

    if (!uni.getStorageSync(WET_MENU_DATA)) {
      uni.setStorageSync(WET_MENU_DATA, dataList);
      this.$store.commit('setDataList', dataList);
    }
  },

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
@import '@/uni_modules/uview-ui/index.scss';
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
