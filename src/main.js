import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from 'store'
import 'styles/reset'
import 'styles/base'
import './registerServiceWorker'

// 如果是移动端开发，可以在开发环境和测试环境引入vConsole
// if (process.env.MODE !== 'pro') {
// import 的语法不支持在条件语句中使用，所以这里要使用require来进行引入
//     var VConsole = require('vconsole/dist/vconsole.min.js');
//     var vConsole = new VConsole();
// }

Vue.use(ElementUI)
Vue.use(Router)
Vue.config.productionTip = false

const vm = new Vue({
  router: new Router({ routes: router }),
  store, // 把store的实例注入到所有的子组件中，子组件可以通过this.$store来进行访问
  render: h => h(App)
}).$mount('#app')

export default vm
