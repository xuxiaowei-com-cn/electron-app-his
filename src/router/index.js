import Vue from 'vue';
import VueRouter from 'vue-router';

import homeRoutes from './home';
import aboutRoutes from './about';

import { userLog } from '../log';

import store from '../store';
import { defaultElectronStoreValue } from '../store/electron-store';

Vue.use(VueRouter);

const routes = [
  homeRoutes,
  aboutRoutes,
];

/**
 * 设置是否使用框架，展开的左侧菜单
 * @param to 需要访问的 页面
 */
function appFrame(to) {
  store.commit('setAppAside', to.meta.appAside === undefined ? defaultElectronStoreValue.appAside : to.meta.appAside);
  store.commit('setAppHeader', to.meta.appHeader === undefined ? defaultElectronStoreValue.appHeader : to.meta.appHeader);
  store.commit('setAppFooter', to.meta.appFooter === undefined ? defaultElectronStoreValue.appFooter : to.meta.appFooter);
  store.commit('setAppAsideDefaultActive', to.path);
}

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  userLog.info(`访问路径：${to.path}`);

  // 左侧菜单
  appFrame(to);

  next();
});

export default router;
