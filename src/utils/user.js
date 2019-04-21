/**
 * Created by wangkai on 2019-04-07
 * 用户信息相关
 */
import vm from '@/main';
import store from 'store';

export const getToken = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return userInfo ? userInfo.token : '';
};

export const goLogin = (message) => {
  message && vm.$message.warning(message);
  localStorage.clear();
  vm.$router.push('/login');
};

/**
 * 获取初始化存储到vuex中的menus和authInfo
 * @returns {Promise<any>}
 */
export const initMenus = () => {
  return new Promise((resolve, reject) => {
    const authInfo = JSON.parse(localStorage.getItem('authInfo'));
    const menus = JSON.parse(localStorage.getItem('menus'));
    if (!authInfo || !menus) {
      // 发请求的时候要有用户信息
      return store.dispatch('router/GET_MENUS');
    }
    store.commit('router/SET_MENUS', { authInfo, menus, hasGetRouter: true });
    resolve();
  });
};
