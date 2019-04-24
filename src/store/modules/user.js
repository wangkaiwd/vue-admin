import { fetchLogin, fetchAuthToken } from 'api/user';
import vm from '@/main';

const user = {
  namespaced: true,
  state: {
    userInfo: {},
    hasGetUserInfo: false
  },
  //同步更改state中的状态
  mutations: {
    SET_USER_INFO (state, userInfo) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      state.userInfo = userInfo;
      state.hasGetUserInfo = true;
    },
    SET_LOGIN_STATUS (state, status) {
      state.hasGetUserInfo = status;
    }
  },
  //异步更改state中的状态
  actions: {
    GET_USER_INFO ({ commit }, { params }) {
      return fetchLogin(params).then(
        res => {
          commit('SET_USER_INFO', res.data);
          vm.$router.push('/main');
          return Promise.resolve(res.data);
        },
        err => Promise.reject(err)
      );
    },
    AUTH_TOKEN ({ commit }) {
      return fetchAuthToken().then(
        res => {
          commit('SET_USER_INFO', res.data);
          return Promise.resolve();
        },
        err => Promise.reject(err)
      );
    }
  }
};
export default user;
