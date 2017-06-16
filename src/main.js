// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueMaterial from 'vue-material';

require('./assets/scss/index');

// vue 全局配置
// 取消 Vue 所有的日志与警告。
Vue.config.silent = true;
// 配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false。生产版本设为 true 可以启用检查。
Vue.config.devtools = true;
//  Set this to false to prevent the production tip on Vue startup.
Vue.config.productionTip = false;



/* 注册主题 */
Vue.use(VueMaterial);src/assets/scss/index.scss
Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
  background: 'white'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
