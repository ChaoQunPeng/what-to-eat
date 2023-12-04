/*
 * @Author: PengChaoQun 1152684231@qq.com
 * @Date: 2023-12-01 12:59:54
 * @LastEditors: PengChaoQun 1152684231@qq.com
 * @LastEditTime: 2023-12-04 18:53:25
 * @FilePath: /what-to-eat/components/index.js
 * @Description: 组件
 */

import Vue from 'vue';

import SideListPopup from './wte-side-list-popup/index';
import Modal from './wte-modal/index';
import ActionSheet from './wte-action-sheet/index';
import Popup from './wte-popup/index';

const components = [SideListPopup, Modal, ActionSheet, Popup];

components.map(component => {
  Vue.component(component.name, component);
});
