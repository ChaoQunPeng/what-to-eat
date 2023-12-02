/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-12-02 18:08:31
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-02 20:05:31
 * @FilePath: /what-to-eat/store/store.js
 * @Description: store文件;
 */
import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex); //vue的插件机制

const store = new Vuex.Store({
  state: {
    dataList: [
      { foodId: 'banfen', food: '拌粉', categoryId: 'zaocan', category: '早餐' },
      { foodId: 'banfen', food: '拌粉', categoryId: 'wucan', category: '午餐' },
      { foodId: 'banfen', food: '拌粉', categoryId: 'wancan', category: '晚餐' },
      { foodId: 'zhujiaofan', food: '猪脚饭', categoryId: 'wucan', category: '午餐' },
      { foodId: 'zhujiaofan', food: '猪脚饭', categoryId: 'wancan', category: '晚餐' },
      { foodId: 'jirou', food: '鸡肉', categoryId: 'huangmenji', category: '黄焖鸡' },
      { foodId: 'jirou', food: '鸡肉', categoryId: 'kendeji', category: '肯德基' }
    ],
  },

  getters: {
    /**
     * @description: 菜单分组
     * @param {*} state
     * 
     * [
     *    {
     *      "name":"",
     *      "list":[""]
     *    }
     * ]
     * @return {*}
     */    
    menuGroupList(state) {
      const foodGroup = {};
      state.dataList.forEach(item => {
        const { foodId } = item;
        if (!foodGroup[foodId]) {
          foodGroup[foodId] = [];
        }
        foodGroup[foodId].push(item);
      });

      console.log(`foodGroup`, foodGroup);

      let list = [];

      for (const key in foodGroup) {
        list.push({
          name: foodGroup[key][0].food,
          list: foodGroup[key]
            .filter(e => e.foodId == key)
            .map(e => e.category)
            .join('、')
        });
      }

      return list;
    },
    categoryGroupList(state) {
      const categoryGroup = {};
      state.dataList.forEach(item => {
        const { categoryId } = item;
        if (!categoryGroup[categoryId]) {
          categoryGroup[categoryId] = [];
        }
        categoryGroup[categoryId].push(item);
      });

      console.log(`categoryGroup`, categoryGroup);

      let list = [];

      for (const key in categoryGroup) {
        list.push({
          name: categoryGroup[key][0].category,
          list: categoryGroup[key]
            .filter(e => e.categoryId == key)
            .map(e => e.food)
            .join('、')
        });
      }

      return list;
    }
  },

  mutations: {
    //相当于同步的操作
  },

  actions: {
    //相当于异步的操作,不能直接改变state的值，只能通过触发mutations的方法才能改变
  }
});

export default store;
