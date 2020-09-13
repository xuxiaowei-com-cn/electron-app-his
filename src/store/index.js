import Vue from 'vue';
import Vuex from 'vuex';

import { getESVal, setESVal } from './electron-store';

Vue.use(Vuex);

/**
 * 根据名称设置 Vuex、electron-store 中的值
 * @param state Vuex Store state
 * @param name 名称
 * @param value 值
 */
function setVal(state, name, value) {
  // eslint-disable-next-line no-param-reassign
  state[name] = value;
  setESVal(name, value);
}

export default new Vuex.Store({
  state: {
    appAside: getESVal('appAside'),
    appHeader: getESVal('appHeader'),
    appFooter: getESVal('appFooter'),
    appAsideCollapse: getESVal('appAsideCollapse'),
    appAsideDefaultActive: getESVal('appAsideDefaultActive'),
    userInfo: getESVal('userInfo'),
  },

  mutations: {

    /**
     * 设置左侧菜单是否展开
     * @param state 状态
     * @param appAsideCollapse 左侧菜单是否展开
     */
    setAppAsideCollapse(state, appAsideCollapse) {
      setVal(state, 'appAsideCollapse', appAsideCollapse);
    },

  },

  actions: {},
  modules: {},
});
