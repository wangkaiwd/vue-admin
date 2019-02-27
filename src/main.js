import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from 'store'
import 'utils/rem'
import 'styles/reset'
import 'styles/base'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store, // 把store的实例注入到所有的子组件中，子组件可以通过this.$store来进行访问
  render: h => h(App)
}).$mount('#app')
