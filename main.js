/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-04-07 15:12:06
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-05 16:27:09
 * @FilePath: /what-to-eat/main.js
 * @Description:
 */
import App from './App';
import Vue from 'vue';
import store from './store/store';
import uView from '@/uni_modules/uview-ui';

Vue.use(uView);

import './uni.promisify.adaptor';

import './components/index';

Vue.prototype.$clone = data => {
  return JSON.parse(JSON.stringify(data));
};

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
  store,
  ...App
});

app.$mount();
