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
import adminAuth from 'directives/auth';
import AdminIcon from 'components/icon';

// if (process.env.NODE_ENV === 'development') {
//   // require是同步引入 , async返回的还是一个Promise
//   require('mock');
// }
import 'mock';
import 'router/permission';

Vue.use(ElementUI);

Vue.filter('formatTime', formatTime);
Vue.component('AdminIcon', AdminIcon);
Vue.directive('admin-auth', adminAuth);
Vue.config.productionTip = false;
const vm = new Vue({
  router,
  store, // 把store的实例注入到所有的子组件中，子组件可以通过this.$store来进行访问
  render: h => h(App)
}).$mount('#app');
export default vm;
