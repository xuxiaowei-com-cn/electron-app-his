const Store = require('electron-store');

const electronStore = new Store();

const defaultElectronStoreValue = { // 默认值

  appAside: true, // 默认框架左侧栏是否显示
  appHeader: true, // 默认框架头部栏是否显示
  appFooter: true, // 默认框架脚部栏是否显示
  appAsideCollapse: true, // 默认左侧菜单是否展开
  appAsideDefaultActive: '/', // 默认展开的左侧菜单

  userInfo: { // 默认用户信息
    username: 'anonymous', // 默认用户名
    name: '匿名', // 默认用户名称
    role: [], // 角色
  },

};

module.exports = {

  /**
   * electron-store 默认值
   */
  defaultElectronStoreValue,

  /**
   * 根据 名称 获取 electron-store 中的值
   * @param name 名称
   * @returns {*} 返回 electron-store 中的值
   */
  getESVal(name) {
    const electronStoreVal = electronStore.get(name);
    return (electronStoreVal === undefined) ? defaultElectronStoreValue[name] : electronStoreVal;
  },

  /**
   * 根据 名称 设置 electron-store 中的 值
   * @param name 名称
   * @param value 值
   */
  setESVal(name, value) {
    electronStore.set(name, value);
  },

  /**
   * 初始化 electron-store 中的值
   */
  initES() {
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const storeName in electronStore.store) {
      electronStore.delete(storeName);
    }
  },

  /**
   * 初始化使用框架
   */
  initESUseFrame() {
    electronStore.set('appAside', defaultElectronStoreValue.appAside);
    electronStore.set('appHeader', defaultElectronStoreValue.appHeader);
    electronStore.set('appFooter', defaultElectronStoreValue.appFooter);
  },

};
