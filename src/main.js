import Vue from 'vue';
import App from './App';
import router from './router';

import '@/assets/styles';
import '@/utils/rem.js';
import '@/request/axiosConfig';
import Api from '@/api';
import { handlePromiseReject } from '@/utils/globalEvent';

handlePromiseReject(); // 全局捕获错误的Promise
Vue.prototype.$api = Api;

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
