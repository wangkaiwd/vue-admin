/**
 * Created by wangkai on 2019-04-07
 * 用户信息相关
 */
import vm from '@/main';
import store from 'store';
import { menus } from 'router';

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
    if (!authInfo) {
      // 发请求的时候要有用户信息
      store.dispatch('router/GET_MENUS').then(
        res => resolve(res),
        err => reject(err)
      );
    }
    const copyMenus = JSON.parse(JSON.stringify(menus));
    const authMenus = getAuthMenus(copyMenus, authInfo);
    store.commit('router/SET_MENUS', { authInfo, menus: authMenus, hasGetRouter: true });
    resolve();
  });
};

/**
 * 根据权限信息过滤路由生成的侧边栏
 * FIXME: 在调用之前注意要深拷贝
 * @param array 侧边栏数组
 * @param authInfo 权限信息
 * @returns {array} 返回过滤后的新数组
 */
export const getAuthMenus = (array, authInfo) => {
  return array.filter(item => {
    // 在没有和后端同事联调的时候，本地access设置为true可以直接访问
    if ((item.meta.access && authInfo.page[item.meta.access]) || item.meta.access === true) {
      if (item.children) item.children = getAuthMenus(item.children, authInfo);
      return true;
    }
  });
};
