import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import { router } from './router';
import store from 'store';
import 'styles/reset';
import 'styles/base';
import './registerServiceWorker';
import { formatTime } from 'filters/tools';
import AdminIcon from 'components/icon';

if (process.env.NODE_ENV === 'development') {
  // require是同步引入
  (async () => await import('mock'))();
}
Vue.use(ElementUI);
// 将js文件引入，如果需要用到里面的函数或者变量，需要将其导出，外部才能使用，否则只是执行js文件中的代码
import 'router/permission';

Vue.filter('formatTime', formatTime);
Vue.component('AdminIcon', AdminIcon);
Vue.config.productionTip = false;
const vm = new Vue({
  router,
  store, // 把store的实例注入到所有的子组件中，子组件可以通过this.$store来进行访问
  render: h => h(App)
}).$mount('#app');
export default vm;
