/**
 * Created by wangkai on 2019-04-14
 */
import { router } from './index';
import store from 'store';
import Vue from 'vue';

const vm = new Vue();
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      store.dispatch('user/AUTH_TOKEN').then(() => next());
    } else {
      vm.$message.warning('请先登录后再访问');
      localStorage.clear();
      next('/login');
    }
  } else { // 如果是登录页面
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!userInfo) return next();
    store.dispatch('user/AUTH_TOKEN').then(() => {
      vm.$message.success('用户已登录');
      next('/main');
    });
  }
});

