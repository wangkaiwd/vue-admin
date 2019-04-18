import { fetchLogin, fetchAuthToken } from 'api/user';
import vm from '@/main';

const user = {
  namespaced: true,
  state: {
    userInfo: {}
  },
  //同步更改state中的状态
  mutations: {
    CHANGE_USER_INFO (state, userInfo) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      state.userInfo = userInfo;
    }
  },
  //异步更改state中的状态
  actions: {
    SET_USER_INFO ({ commit }, { params, cb }) {
      cb(true);
      fetchLogin(params).then(
        res => {
          cb(false);
          commit('CHANGE_USER_INFO', res.data);
          vm.$router.push('/main');
        },
        err => {
          console.log(err);
          cb(false);
        }
      );
    },
    AUTH_TOKEN ({ commit }) {
      return fetchAuthToken().then(
        res => {
          commit('CHANGE_USER_INFO', res.data);
          return Promise.resolve();
        },
        err => Promise.reject(err)
      );
    }
  }
};
export default user;
