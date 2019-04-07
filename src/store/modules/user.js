import { fetchLogin } from 'api/user';
import vm from '@/main';

const user = {
  state: {
    userInfo: {}
  },
  //同步更改state中的状态
  mutations: {
    changeUserInfo (state, userInfo) {
      state.userInfo = userInfo;
    }
  },
  //异步更改state中的状态
  actions: {
    setUserInfo ({ commit }, { params, cb }) {
      cb(true);
      fetchLogin(params).then(
        res => {
          cb(false);
          localStorage.setItem('userInfo', JSON.stringify(res.data));
          commit('changeUserInfo', res.data);
          vm.$router.push('/main');
        },
        err => {
          console.log(err);
          cb(false);
        }
      );
    }
  }
};
export default user;
