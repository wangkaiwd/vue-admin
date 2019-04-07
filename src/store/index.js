import Vue from 'vue';
import user from './modules/user';
import goods from './modules/goods';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    goods
  },
});
