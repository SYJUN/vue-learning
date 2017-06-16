var path = require('path');
var utils = require('./utils');
var config = require('../config');    // 获取配置
var vueLoaderConfig = require('./vue-loader.conf');


var env = process.env.NODE_ENV;
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap);   /* 是否在 dev 环境下开启 cssSourceMap ，在 config/index.js 中可配置 */
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap);    /* 是否在 production 环境下开启 cssSourceMap ，在 config/index.js 中可配置 */
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd;     /* 最终是否使用 cssSourceMap */



function resolve (dir) {
  return path.join(__dirname, '..', dir);   // path.resolve(__dirname, '../src')
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    // webpack编译输出的发布路径(判断是正式环境或者开发环境等)
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {    // 创建import或require的别名，一些常用的，路径长的都可以用别名
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'src': resolve('src'),
      'assets': resolve('assets'),
      'components': resolve('components'),
      'scss_vars': resolve('scss_vars')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
};
