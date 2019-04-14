/**
 * Created by wangkai on 2019-04-14
 */
import { router } from './index';
import store from 'store';
import Vue from 'vue';

const vm = new Vue();
router.beforeEach((to, from, next) => {
  if (to.path !== '/register' && to.path !== '/login') {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      store.commit('user/CHANGE_USER_INFO', userInfo);
      if (to.path === '/login') {
        vm.$message.success('用户已登录');
        next('/main');
        return;
      }
      next();
    } else {
      vm.$message.warning('请先登录');
      localStorage.clear();
      next('/login');
    }
  } else {next();}
});

