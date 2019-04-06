import Vue from 'vue';
import Router from 'vue-router';
import lazyLoading from './lazyLoading';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: lazyLoading('home')
    },
    {
      path: '/register',
      name: 'register',
      component: lazyLoading('register')
    },
    {
      path: '/login',
      name: 'login',
      component: lazyLoading('login')
    },
    {
      path: '*',
      name: '404',
      component: lazyLoading('notFound/404')
    }
  ]
});
