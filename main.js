/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-04-07 15:12:06
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-11-29 16:09:48
 * @FilePath: /what-to-eat/main.js
 * @Description: 
 */
import App from './App'




// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif