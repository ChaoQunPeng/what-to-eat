/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-12-01 12:59:54
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-03 17:02:19
 * @FilePath: /what-to-eat/components/index.js
 * @Description: 组件
 */

import Vue from 'vue';

import SideListPopup from './side-list-popup/index';
import Modal from './modal/index';
import ActionSheet from './action-sheet/index';
import Popup from './popup/index';

const components = [SideListPopup, Modal, ActionSheet, Popup];

components.map(component => {
  Vue.component(component.name, component);
});
