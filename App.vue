<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2019-04-01 01:47:12
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-11 18:38:37
 * @FilePath: /what-to-eat/App.vue
 * @Description: 
-->
<script>
import { WET_MENU_DATA, WET_IS_AUTO_STOP_RANDOM_TIMER } from './config/constant';

export default {
  created() {
    const dataList = [
      {
        id: 'wucan',
        name: '午餐吃什么',
        foodList: [
          {
            id: 'cvusapt22ku',
            name: '炒粉'
          },
          {
            id: 'z2kp7ncp8ek',
            name: '烧饼'
          },
          {
            id: 'zr9zq0aamuf',
            name: '烧鸭饭'
          },
          {
            id: 'lacrbbv0ce9',
            name: '白切鸡饭'
          },
          {
            id: 'cvkh1ubi0zr',
            name: '螺蛳粉'
          }
        ]
      },
      {
        id: 'shuiguo',
        name: '吃什么饭后水果',
        foodList: [
          {
            id: 'wrwq4wgsih',
            name: '苹果'
          },
          {
            id: 'y63oixemxz',
            name: '梨子'
          },
          {
            id: 'loequjdql3b',
            name: '香蕉'
          },
          {
            id: 'sdajs1q7u5',
            name: '葡萄'
          }
        ]
      },
      {
        id: 'daguanzi',
        name: '明天要不要早起?',
        foodList: [
          {
            id: 'vxl0ub2ch2',
            name: '要'
          },
          {
            id: '7i00abcceac',
            name: '不要'
          }
        ]
      },
      {
        id: 'yule',
        name: '下班后怎么放松',
        foodList: [
          {
            id: 'g3vkdjzqpxl',
            name: '看电影'
          },
          {
            id: 'm7hwcnyrtdb',
            name: '按摩'
          },
          {
            id: 'e2uflnpwbvq',
            name: '公园散步'
          },
          {
            id: 'j9sbgkpzvow',
            name: '大吃一顿'
          }
        ]
      }
    ];

    if (!uni.getStorageSync(WET_MENU_DATA)) {
      uni.setStorageSync(WET_MENU_DATA, dataList);
      this.$store.commit('updateDataList', dataList);
    }

    if (!uni.getStorageSync(WET_IS_AUTO_STOP_RANDOM_TIMER)) {
      uni.setStorageSync(WET_IS_AUTO_STOP_RANDOM_TIMER, false);
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
