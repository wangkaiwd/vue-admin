import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const getComponent = dir => () => import(`views/${dir}`);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home/index',
      name: 'home',
      component: getComponent('home'),
      meta: { title: '首页' }
    },
    {
      path: '/goods',
      name: 'goods',
      component: getComponent('goods'),
      meta: { title: '商品' }
    },
    {
      path: '/personal',
      name: 'personal',
      component: getComponent('personal'),
      meta: { title: '个人中心' }
    },
    {
      path: '/shopCart',
      name: 'shopCart',
      component: getComponent('shopCart'),
      meta: { title: '购物车' }
    },
  ]
});
