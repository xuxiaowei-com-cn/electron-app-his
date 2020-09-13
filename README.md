# electron-app-his
一个基于 Electron 的 HIS 项目

## 创建项目
- [Electron Forge Webpack](https://www.electronforge.io/templates/webpack-template)
- [electron](https://developer.aliyun.com/mirror/npm/package/electron)
~~~
npm i -g create-electron-app
npx create-electron-app my-new-app --template=webpack
~~~

## eslint
- [eslint-config-airbnb](https://developer.aliyun.com/mirror/npm/package/eslint-config-airbnb)
- [import/no-extraneous-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md)
~~~
npm i -D eslint
npm i -D eslint-config-airbnb
npm i -D eslint-plugin-import
npm i -D eslint-plugin-jsx-a11y
npm i -D eslint-plugin-react
~~~

## sass/scss
- [sass-loader](https://developer.aliyun.com/mirror/npm/package/sass-loader)
- [sass中文文档](https://www.sass.hk/docs/)
- [CSS转Sass](https://www.sass.hk/css2sass/)
~~~
npm i -D node-sass
npm i -D sass-loader
~~~

## vue
- [vue cli](https://cli.vuejs.org/zh/)
- [vue-loader](https://vue-loader.vuejs.org/guide/#manual-setup)
- [copy-webpack-plugin](https://developer.aliyun.com/mirror/npm/package/copy-webpack-plugin)
~~~
npm i vue
npm i -D vue-loader
npm i -D vue-template-compiler
npm i -D copy-webpack-plugin
~~~

## vuex
- [vuex installation](https://vuex.vuejs.org/zh/installation.html)
- [vuex](https://developer.aliyun.com/mirror/npm/package/vuex)
~~~
npm i vuex
~~~

## vue-router
- [vue-router zh](https://router.vuejs.org/zh/)
- [vue-router](https://developer.aliyun.com/mirror/npm/package/vue-router)
~~~
npm i vue-router
~~~

## element-ui
- [element-ui installation](https://element.eleme.cn/#/zh-CN/component/installation)
- [element-ui](https://developer.aliyun.com/mirror/npm/package/element-ui)
~~~
npm i element-ui
~~~

## electron-log
- [electron-log](https://developer.aliyun.com/mirror/npm/package/electron-log)
~~~
npm i electron-log
~~~

## electron-store
- [electron-store](https://developer.aliyun.com/mirror/npm/package/electron-store)
- 由于 electron 10 中 enableRemoteModule 的默认值为false（electron 9 中的默认值为true），所以使用 electron 10 时需要设置后才能正常使用
~~~
npm i electron-store
~~~
