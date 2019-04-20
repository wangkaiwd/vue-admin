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

const vm = new Vue();
router.beforeEach((to, from, next) => {
  console.log('路由加载开始');
  console.log(to.path);
  NProgress.start();
  if (to.path !== '/login') {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      store.commit('user/CHANGE_USER_INFO', userInfo);
      next();
    } else {
      vm.$message.warning('请先登录后再访问');
      localStorage.clear();
      next('/login');
    }
  } else { // 如果是登录页面
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!userInfo) return next();
    store.commit('user/CHANGE_USER_INFO', userInfo);
    vm.$message.success('用户已登录');
    NProgress.done();
    next('/main');
  }
});
router.afterEach((to, from, next) => {
  console.log('路由加载完成');
  console.log(to.path);
  NProgress.done();
});

