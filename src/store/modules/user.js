import { fetchLogin } from 'api/user';

const user = {
  namespaced: true,
  state: {
    userInfo: {}
  },
  //同步更改state中的状态
  mutations: {
    changeName (state) {
      state.name = 'userChangeName';
    }
  },
  //异步更改state中的状态
  actions: {
    getUserInfo () {
    }
  }
};
export default user;
