/**
 * Created by wangkai on 2019-04-20
 * 路由列表全局控制
 */
import { menus } from 'router';
import { fetchRouter } from 'api/user';

const getAuthMenus = (array, authInfo) => {
  return array.filter(item => {
    if (item.meta.access && authInfo.page[item.meta.access]) {
      if (item.children) item.children = getAuthMenus(item.children, authInfo);
      return true;
    }
  });
};
const router = {
  namespaced: true,
  state: {
    authInfo: {},
    menus: []
  },
  getters: {
    page (state) {
      return state.authInfo.page || {};
    },
    component (state) {
      return state.authInfo.component || {};
    }
  },
  mutations: {
    SET_MENUS (state, { authInfo, menus }) {
      localStorage.setItem('authInfo', JSON.stringify(authInfo));
      localStorage.setItem('menus', JSON.stringify(menus));
      state.menus = menus;
      state.authInfo = authInfo;
    }
  },
  actions: {
    GET_MENUS ({ commit }) {
      // 调用实机：1. 用户登录之后， 2. 权限发生变化之后
      return fetchRouter().then(
        res => {
          // 当访问不存在路由的时候由后端提示
          const copyMenus = JSON.parse(JSON.stringify(menus));
          const authMenus = getAuthMenus(copyMenus, res.data);
          commit('SET_MENUS', { authInfo: res.data, menus: authMenus });
          return Promise.resolve({ authInfo: res.data, menus: authMenus });
        }
      );
    }
  }
};
export default router;
