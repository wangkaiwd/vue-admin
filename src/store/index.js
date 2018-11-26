import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,
    common
  }
})
console.log(store)
export default store
