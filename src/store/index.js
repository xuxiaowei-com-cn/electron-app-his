import Vue from 'vue';
import Vuex from 'vuex';

const { getESVal, setESVal } = require('./electron-store');

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
    appAsideCollapse: getESVal('appAsideCollapse'),
    appAsideDefaultActive: getESVal('appAsideDefaultActive'),
    appHeader: getESVal('appHeader'),
    appFooter: getESVal('appFooter'),

    userInfo: getESVal('userInfo'),

  },

  mutations: {

    /**
     * 设置框架左侧栏是否显示
     * @param state 状态
     * @param appAside 框架左侧栏是否显示
     */
    setAppAside(state, appAside) {
      setVal(state, 'appAside', appAside);
    },

    /**
     * 设置左侧菜单是否展开
     * @param state 状态
     * @param appAsideCollapse 左侧菜单是否展开
     */
    setAppAsideCollapse(state, appAsideCollapse) {
      setVal(state, 'appAsideCollapse', appAsideCollapse);
    },

    /**
     * 设置展开的左侧菜单
     * @param state 状态
     * @param appAsideDefaultActive 展开的左侧菜单
     */
    setAppAsideDefaultActive(state, appAsideDefaultActive) {
      setVal(state, 'appAsideDefaultActive', appAsideDefaultActive);
    },

    /**
     * 设置框架头部栏是否显示
     * @param state 状态
     * @param appHeader 框架头部栏是否显示
     */
    setAppHeader(state, appHeader) {
      setVal(state, 'appHeader', appHeader);
    },

    /**
     * 设置框架脚部栏是否显示
     * @param state 状态
     * @param appFooter 框架脚部栏是否显示
     */
    setAppFooter(state, appFooter) {
      setVal(state, 'appFooter', appFooter);
    },

    /**
     * 设置用户信息
     *
     * 用户信息异常判断，用户名与用户姓名不能为空等非法字段（防止日志异常）
     *
     * @param state 状态
     * @param userInfo 用户信息
     */
    setUserInfo(state, userInfo) {
      setVal(state, 'userInfo', userInfo);
    },

  },

  actions: {},
  modules: {},
});
