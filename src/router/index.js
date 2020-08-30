import Vue from 'vue';
import VueRouter from 'vue-router';

import homeRoutes from './home';
import aboutRoutes from './about';

Vue.use(VueRouter);

const routes = [
  homeRoutes,
  aboutRoutes,
];

const router = new VueRouter({
  routes,
});

export default router;
