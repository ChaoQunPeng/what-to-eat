<!--
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2019-04-01 01:47:12
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-11 18:38:37
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
            id: 'r3v66dk0t2l',
            name: '拌粉+瓦罐汤'
          },
          {
            id: '1ofr5ksa8zsh',
            name: '汤粉'
          },
          {
            id: 'xrmqyx0yayk',
            name: '包子'
          },
          {
            id: '1l3n1yflnl5',
            name: '豆浆油条'
          },
          {
            id: '2xxrftqzwqi',
            name: '肠粉'
          }
        ]
      },
      {
        id: 'wucan',
        name: '午餐',
        foodList: [
          {
            id: '4o1ka6gmbim',
            name: '猪脚饭'
          },
          {
            id: 'i0jpxxsl07n',
            name: '黄焖鸡'
          },
          {
            id: 'wnzdmhl5hyp',
            name: '回锅肉盖浇饭'
          },
          {
            id: 's2r9znyslyd',
            name: '啤酒鸭盖浇饭'
          },
          {
            id: 'yjptqwtk31a',
            name: '鸡蛋肉丝炒粉'
          },
          {
            id: 'ywrtm9puqi',
            name: '老干妈蛋炒粉'
          }
        ]
      },
      {
        id: 'wancan',
        name: '晚餐',
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
        name: '水果',
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
        name: '馆子店',
        foodList: [
          {
            id: 'vxl0ub2ch2',
            name: '绿茶餐厅'
          },
          {
            id: '7i00abcceac',
            name: '遇江南'
          },
          {
            id: 'n22g0xgk1h',
            name: '骨之味'
          },
          {
            id: '4tiak9stpss',
            name: '盛焰铁板烧'
          },
          {
            id: 'm9d3sutc62',
            name: '古乐牛香'
          }
        ]
      },
      {
        id: 'richangxiaodian',
        name: '日常小店',
        foodList: [
          {
            id: 'nzqafg5lf2',
            name: '沙县小吃'
          },
          {
            id: 'kxyo055er4n',
            name: '隆江猪脚饭'
          },
          {
            id: '0xtgvlw2zbdh',
            name: '麦当劳'
          },
          {
            id: 'ifeq1g88ron',
            name: '肯德基'
          },
          {
            id: 'e035fwagaet',
            name: '绝杀水煮'
          },
          {
            id: 't59xldk0eme',
            name: '膳当家黄焖鸡'
          }
        ]
      },
      {
        id: 'shaxianxiaochi',
        name: '沙县小吃',
        foodList: [
          {
            id: 'a5tccdvwoyq',
            name: '云吞面'
          },
          {
            id: 'rnwislixvmc',
            name: '鸭腿饭'
          },
          {
            id: 'getz13v387w',
            name: '鸭头饭'
          },
          {
            id: 'odrphf1wg89',
            name: '鸡腿饭'
          }
        ]
      }
    ];

    if (!uni.getStorageSync(WET_MENU_DATA)) {
      uni.setStorageSync(WET_MENU_DATA, dataList);
      this.$store.commit('updateDataList', dataList);
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
