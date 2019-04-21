import Vue from 'vue';
import VueRouter from 'vue-router';
import lazyLoading from './lazyLoading';
import menuList from './generateMenus';

Vue.use(VueRouter);

const authRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    // access: 'dashboard', // 这些额外的数据并不会出现在路由对象中，需要使用meta属性
    component: lazyLoading('home'),
    redirect: '/main',
    iconCls: 'el-icon-sold-out',
    meta: { access: 'dashboard' },
    children: [
      {
        path: '/main',
        name: '主页',
        component: lazyLoading('main'),
        meta: { access: 'main' },
      },
      {
        path: '/editor',
        name: '富文本',
        component: lazyLoading('editor'),
        meta: { access: 'editor' }
      },
      {
        path: '/list',
        name: '列表',
        access: 'list',
        component: lazyLoading('list'),
        meta: { access: 'list' }
      },
    ]
  },
  {
    path: '/',
    name: '组件',
    component: lazyLoading('home'),
    iconCls: 'el-icon-date',
    meta: { access: 'components' },
    children: [
      {
        path: '/splitPanel',
        name: '分割面板',
        access: 'splitPanel',
        component: lazyLoading('splitPanel'),
        meta: { access: 'splitPanel' },
      },
      {
        path: '/editTable',
        name: '编辑表格',
        component: lazyLoading('editTable'),
        meta: { access: 'editTable' },
      },
    ]
  },
  {
    path: '/',
    component: lazyLoading('home'),
    leaf: true,
    children: [
      {
        path: '/dirTree',
        iconCls: 'el-icon-bell',
        name: '目录树',
        component: lazyLoading('dirTree'),
        meta: { access: 'dirTree' }
      },
    ]
  },
  {
    path: '/',
    name: 'form',
    component: lazyLoading('home'),
    iconCls: 'el-icon-menu',
    meta: { access: 'form' },
    children: [
      {
        path: '/mapForm',
        name: '渲染form',
        component: lazyLoading('mapForm'),
        meta: { access: 'mapForm' },
      }
    ]
  }
];
const commonRoutes = [
  {
    path: '/register',
    name: 'register',
    hidden: true,
    component: lazyLoading('register')
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: lazyLoading('login')
  },
  {
    path: '/401',
    name: '401',
    hidden: true,
    component: lazyLoading('errorPages/401')
  },
  {
    path: '*',
    name: '404',
    hidden: true,
    component: lazyLoading('errorPages/404')
  }
];
const routes = [...authRoutes, ...commonRoutes];
const router = new VueRouter({ routes });
const menus = menuList(routes);
// 想要将内容处理成自己想要的比较困难，通过动态为数组内容添加字段然后在遍历的过程中通过字段来确定是否显示相对来说会简单一些
// 所以想要将数组的内容过滤掉相对来说会比较困难
export { menus, router };
