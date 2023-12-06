<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2019-04-01 01:47:12
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-06 16:27:41
 * @FilePath: /what-to-eat/App.vue
 * @Description: 
-->
<script>
import { WET_MENU_DATA } from './config/constant';

export default {
  created() {
    const dataList = [
      {
        id: 'zaocan',
        name: '早餐',
        foodList: [
          {
            id: 'banfen',
            name: '拌粉'
          },
          {
            id: 'tangfen',
            name: '汤粉'
          },
          {
            id: 'baozi',
            name: '包子'
          }
        ]
      },
      {
        id: 'wucan',
        name: '午餐',
        foodList: [
          {
            id: 'zhujiaofan',
            name: '猪脚饭'
          },
          {
            id: 'huangmenji',
            name: '黄焖鸡'
          },
          {
            id: 'huiguorougaijiaofan',
            name: '回锅肉盖浇饭'
          },
          {
            id: 'xiaojidunmogu',
            name: '小鸡炖蘑菇'
          },
          {
            id: 'hongshaopaigu',
            name: '红烧排骨'
          }
        ]
      },
      {
        id: 'wancan',
        name: '晚餐',
        foodList: [
          {
            id: 'chaofen',
            name: '炒粉'
          },
          {
            id: 'shaobing',
            name: '烧饼'
          },
          {
            id: 'jiangzipaigu',
            name: '酱汁排骨'
          },
          {
            id: 'jiangzipaigu',
            name: '酱汁排骨'
          }
        ]
      },
      {
        id: 'shuiguo',
        name: '水果',
        foodList: [
          {
            id: 'pingguo',
            name: '苹果'
          },
          {
            id: 'lizi',
            name: '梨子'
          },
          {
            id: 'xiangjiao',
            name: '香蕉'
          },
          {
            id: 'putao',
            name: '葡萄'
          }
        ]
      }
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
