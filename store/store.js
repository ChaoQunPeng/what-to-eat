/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-12-02 18:08:31
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-11 18:41:10
 * @FilePath: /what-to-eat/store/store.js
 * @Description: store文件;
 */
import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex); //vue的插件机制

import { WET_MENU_DATA } from '../config/constant';

/**
 * @description: 获取本地数据
 * @return {*}
 */
const getLocalData = () => {
  return uni.getStorageSync(WET_MENU_DATA);
};

/**
 * @description: 保存本地数据
 * @param {*} data
 * @return {*}
 */
const setLocalData = data => {
  return uni.setStorageSync(WET_MENU_DATA, data);
};

/**
 * @description: 生成guid
 * @return {*}
 */
const guid = () => {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const store = new Vuex.Store({
  state: {
    dataList: []
  },

  getters: {
    // /**
    //  * 事项数据-对象形式
    //  * @param {*} state
    //  * {
    //  *    "事项名称1":[{}],
    //  *    "事项名称2":[{}]
    //  * }
    //  */
    // foodMap(state) {
    //   const foodGroup = {};
    //   state.dataList.forEach(item => {
    //     const { foodId } = item;
    //     if (!foodGroup[foodId]) {
    //       foodGroup[foodId] = [];
    //     }
    //     foodGroup[foodId].push(item);
    //   });
    //   console.log(`foodGroup`, foodGroup);
    //   return foodGroup;
    // },
    // /**
    //  * 分类数据-对象形式
    //  * @param {*} state
    //  * {
    //  *    "分类名称1":[{}],
    //  *    "分类名称2":[{}]
    //  * }
    //  */
    // categoryMap(state) {
    //   const categoryGroup = {};
    //   state.dataList.forEach(item => {
    //     const { categoryId } = item;
    //     if (!categoryGroup[categoryId]) {
    //       categoryGroup[categoryId] = [];
    //     }
    //     categoryGroup[categoryId].push(item);
    //   });
    //   console.log(`categoryGroup`, categoryGroup);
    //   return categoryGroup;
    // },
    // /**
    //  * @description: 事项列表
    //  * @param {*} state
    //  *
    //  * [
    //  *    {
    //  *      "id":"",
    //  *      "name":"事项",
    //  *      "list":[{}]
    //  *    }
    //  * ]
    //  * @return {*}
    //  */
    // foodList() {
    //   const foodGroup = store.getters.foodMap;
    //   let list = [];
    //   for (const key in foodGroup) {
    //     list.push({
    //       id: foodGroup[key][0].foodId,
    //       name: foodGroup[key][0].food,
    //       list: foodGroup[key].filter(e => e.foodId == key)
    //     });
    //   }
    //   console.log(`foodList`, list);
    //   return list;
    // },
    // /**
    //  * @description: 分类列表
    //  * @param {*} state
    //  *
    //  * [
    //  *    {
    //  *      "id":"",
    //  *      "name":"分类",
    //  *      "list":[{}]
    //  *    }
    //  * ]
    //  * @return {*}
    //  */
    // categoryList() {
    //   const categoryGroup = store.getters.categoryMap;
    //   let list = [];
    //   for (const key in categoryGroup) {
    //     list.push({
    //       id: categoryGroup[key][0].categoryId,
    //       name: categoryGroup[key][0].category,
    //       list: categoryGroup[key].filter(e => e.categoryId == key)
    //     });
    //   }
    //   console.log(`categoryList`, list);
    //   return list;
    // }
  },

  mutations: {
    /**
     * @description: 更新dataList
     * @param {*} state
     * @param {*} dataList
     * @return {*}
     */
    updateDataList(state, dataList) {
      state.dataList = dataList;
    },
    /**
     * @description:
     * @param {*} state
     * @param {*} menuId
     * @param {*} foodName
     * @return {*}
     */
    createFood(state, { menuId, foodName }) {
      let menuList = getLocalData();

      let menu = menuList.find(e => e.id == menuId);

      let newData = {
        id: guid(),
        name: foodName
      };

      menu.foodList.push(newData);

      setLocalData(menuList);
      store.commit('updateDataList', menuList);
    },
    /**
     * @description: 删除事项
     * @param {*} state
     * @param {*} menuId
     * @param {*} foodId
     * @return {*}
     */    
    deleteFood(state, { menuId, foodId }) {
      let menuList = getLocalData();
      let foodList = menuList.find(e => e.id == menuId).foodList;

      let index = foodList.findIndex(e => e.id == foodId);
      foodList.splice(index, 1);

      setLocalData(menuList);
      store.commit('updateDataList', menuList);
    },
    /**
     * @description: 创建分类
     * @param {*} state
     * @param {*} categoryList
     * @param {*} foodName
     * @return {*}
     */
    createMenu(state, { name }) {
      let list = getLocalData();

      let newData = {
        id: guid(),
        name: name,
        foodList: []
      };

      setLocalData([...list, newData]);

      store.commit('updateDataList', [...list, newData]);
    },
    /**
     * @description: 删除分类
     * @param {*} state
     * @param {*} menuId
     * @return {*}
     */
    deleteMenu(state, id) {
      let list = getLocalData();

      list = list.filter(e => e.id != id);

      setLocalData(list);

      store.commit('updateDataList', list);
    },
    /**
     * @description: 更新事项数据
     * @param {*} state
     * @param {*} id
     * @param {*} newData
     * @return {*}
     */
    updateFoodLocalData(state, newData) {
      let list = getLocalData();
      let foodIndex = list.findIndex(e => e.foodId == newData.foodId);

      if (foodIndex > -1) {
        list.forEach(e => {
          if (e.foodId == newData.foodId) {
            e.food = newData.food;
          }
        });

        setLocalData(list);
        store.commit('updateDataList', list);
      } else {
        console.log(`查无数据`);
      }
    },
    /**
     * @description: 更新分类数据
     * @param {*} state
     * @param {*} id
     * @param {*} newData
     * @return {*}
     */
    updateMenuData(state, { id, name }) {
      let list = getLocalData();
      let menu = list.find(e => e.id == id);

      if (menu) {
        menu.name = name;

        setLocalData(list);
        store.commit('updateDataList', list);
      } else {
        console.log(`查无数据`);
      }
    }
  },

  actions: {}
});

store.commit('updateDataList', uni.getStorageSync(WET_MENU_DATA));

export default store;
