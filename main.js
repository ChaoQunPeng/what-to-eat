/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-04-07 15:12:06
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-11-30 17:46:09
 * @FilePath: /what-to-eat/main.js
 * @Description: 
 */
import App from './App'
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'

Vue.use(uView);

import './uni.promisify.adaptor'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})

app.$mount()