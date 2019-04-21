import Vue from 'vue';
import user from './modules/user';
import goods from './modules/goods';
import router from './modules/router';
import topNav from './modules/topNav';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state: {
    isCollapsed: false
  },
  mutations: {
    CHANGE_NAV (state, status) {
      state.isCollapsed = status;
    }
  },
  modules: { user, goods, router, topNav },
});
