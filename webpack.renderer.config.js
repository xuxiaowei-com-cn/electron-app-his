const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins: [
    // https://vue-loader.vuejs.org/guide/#manual-setup
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${__dirname}/src/assets`,
          to: `${__dirname}/.webpack/renderer${process.env.NODE_ENV === 'development' ? '' : '/main_window'}/assets`,
        },
        // element-ui 样式
        {
          from: `${__dirname}/node_modules/element-ui/lib/theme-chalk/index.css`,
          to: `${__dirname}/.webpack/renderer${process.env.NODE_ENV === 'development' ? '' : '/main_window'}/element-ui/lib/theme-chalk/index.css`,
        },
        // element-ui 字体
        {
          from: `${__dirname}/node_modules/element-ui/lib/theme-chalk/fonts`,
          to: `${__dirname}/.webpack/renderer${process.env.NODE_ENV === 'development' ? '' : '/main_window'}/element-ui/lib/theme-chalk/fonts`,
        },
      ],
    }),
  ],
};
