import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import { routes } from './router';
import store from 'store';
import 'styles/reset';
import 'styles/base';
import './registerServiceWorker';
import { formatTime } from 'filters/tools';
import AdminIcon from 'components/icon';

Vue.use(ElementUI);
Vue.use(Router);
Vue.filter('formatTime', formatTime);
Vue.component('AdminIcon', AdminIcon);
Vue.config.productionTip = false;

const vm = new Vue({
  router: new Router({ routes }),
  store, // 把store的实例注入到所有的子组件中，子组件可以通过this.$store来进行访问
  render: h => h(App)
}).$mount('#app');

export default vm;
