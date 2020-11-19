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

const CryptoJS = require('crypto-js');
const { getESVal, initES, setESVal } = require('./store/electron-store');

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.prototype.$userLog = userLog;
Vue.prototype.$sysLog = sysLog;
Vue.prototype.$CryptoJS = CryptoJS;
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

// <div id="node-version"></div>
// <div id="chrome-version"></div>
// <div id="electron-version"></div>
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// eslint-disable-next-line no-undef
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    // eslint-disable-next-line no-undef
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  // eslint-disable-next-line no-restricted-syntax
  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, `${type} ${process.versions[type]}`);
  }
});
