/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './css/style.scss';
import './css/style.sass';
import './css/index.css';

import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';

import store from './store';
import router from './router';
import { sysLog, userLog } from './log';
import { getESVal, initES, setESVal } from './store/electron-store';

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.prototype.$userLog = userLog;
Vue.prototype.$sysLog = sysLog;
Vue.prototype.$getESVal = getESVal;
Vue.prototype.$setESVal = setESVal;
Vue.prototype.$initES = initES;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');

// eslint-disable-next-line no-console
console.log('👋 This message is being logged by "renderer.js", included via webpack');
