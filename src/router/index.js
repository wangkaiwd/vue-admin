import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import lazyLoading from './lazyLoading';
import menuList from './generateMenus';

const authRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    access: 'dashboard',
    component: lazyLoading('home'),
    redirect: '/main',
    iconCls: 'el-icon-sold-out',
    children: [
      { path: '/main', name: '主页', access: 'main', component: lazyLoading('main') },
      { path: '/editTable', name: '可编辑表格', access: 'editTable', component: lazyLoading('editTable') },
      { path: '/editor', name: '富文本', access: 'editor', component: lazyLoading('editor') },
      { path: '/list', name: '列表', access: 'list', component: lazyLoading('list') },
    ]
  },
  {
    path: '/',
    name: '组件',
    access: 'components',
    component: lazyLoading('home'),
    iconCls: 'el-icon-date',
    children: [
      { path: '/splitPanel', name: '分割面板', access: 'splitPanel', component: lazyLoading('splitPanel') },
    ]
  },
  {
    path: '/',
    component: lazyLoading('home'),
    leaf: true,
    children: [
      { path: '/dirTree', iconCls: 'el-icon-bell', name: '目录树', access: 'dirTree', component: lazyLoading('dirTree') },
    ]
  },
  {
    path: '/',
    name: 'form',
    access: 'form',
    component: lazyLoading('home'),
    iconCls: 'el-icon-menu',
    children: [
      { path: '/mapForm', name: '渲染form', access: 'mapForm', component: lazyLoading('mapForm') }
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
    path: '*',
    name: '404',
    hidden: true,
    component: lazyLoading('notFound/404')
  }
];
const routes = [...authRoutes, ...commonRoutes];
const router = new VueRouter({ routes });
const menus = menuList(routes);
// 想要将内容处理成自己想要的比较困难，通过动态为数组内容添加字段然后在遍历的过程中通过字段来确定是否显示相对来说会简单一些
// 所以想要将数组的内容过滤掉相对来说会比较困难
export { menus, router };
