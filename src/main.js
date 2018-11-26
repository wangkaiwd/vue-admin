import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import '@/assets/styles';
import '@/request/axiosConfig';
import Api from '@/api';
import { handlePromiseReject } from '@/utils/globalEvent';
import './registerServiceWorker';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
handlePromiseReject(); // 全局捕获错误的Promise
Vue.prototype.$api = Api;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
