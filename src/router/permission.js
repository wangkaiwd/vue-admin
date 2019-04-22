/**
 * Created by wangkai on 2019-04-14
 */
// 如果多次重复执行同一句import语句，那么只会执行一次，而不会执行多次
// 而且 commonJs模块输出的是一个值的拷贝，而es6模块输出的是值的引用
// 同import Vue form 'vue'，只会在main.js中执行一次，
// 而之后再次执行import Vue from 'vue' 的时候，拿到的并不是一个新的Vue，而是Vue的一个引用，
// 所以可以之前通过Vue.use()使用的插件依旧可以在当前引入的Vue实例上直接使用，而不用重新调用use方法
import { router } from './index';
import store from 'store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Vue from 'vue';
import { initMenus } from 'utils/user';

const vm = new Vue();
// 这里的大概逻辑：
//  1. 用户信息是否存在：
//      a.存在如果去登陆页面，要提示已登陆，重新回到主页
//      b.存在没有去登录页执行next()
//  2. 用户信息不存在：请登录后访问
//  3. 用户访问的页面是否有权限，有权限的话直接访问，没有权限跳转到401

const authRouter = (to, next) => {
  const noAuth = to.meta.access && to.meta.access !== true && !store.getters['router/page'][to.meta.access] && to.path !== '/401';
  if (noAuth) {
    return next({ path: '/401', replace: true });
  }
  next();
};
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.path !== '/login' && to.path !== '/register') {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      const { hasGetUserInfo } = store.state.user;
      if (!hasGetUserInfo) {
        store.commit('user/CHANGE_USER_INFO', userInfo);
      }
      const { hasGetRouter } = store.state.router;
      if (hasGetRouter) {
        authRouter(to, next);
      } else {
        initMenus().then(
          () => authRouter(to, next),
          () => next()
        );
      }
    } else {
      vm.$message.warning('请先登录后再访问');
      localStorage.clear();
      next('/login');
    }
  } else if (to.path === '/login') { // 如果是登录页面
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!userInfo) return next();
    store.commit('user/CHANGE_USER_INFO', userInfo);
    vm.$message.success('用户已登录');
    NProgress.done();
    next('/main');
  } else {
    next();
  }
});
router.afterEach((to, from, next) => {
  NProgress.done();
});

