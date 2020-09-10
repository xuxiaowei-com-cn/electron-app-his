import Vue from 'vue';
import VueRouter from 'vue-router';

import homeRoutes from './home';
import aboutRoutes from './about';

import { userLog } from '../log';

Vue.use(VueRouter);

const routes = [
  homeRoutes,
  aboutRoutes,
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  userLog.info(`访问路径：${to.path}`);
  next();
});

export default router;
