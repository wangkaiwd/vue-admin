import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import lazyLoading from './lazyLoading';
import menuList from './generateMenus';

const routes = [
  {
    path: '/',
    name: '导航一',
    component: lazyLoading('home'),
    redirect: '/main',
    iconCls: 'el-icon-sold-out',
    children: [
      { path: '/main', name: '主页', component: lazyLoading('main') },
      { path: '/table', name: 'Table', component: lazyLoading('table') },
      { path: '/editor', name: '富文本', component: lazyLoading('editor') },
      { path: '/list', name: '列表', component: lazyLoading('list') },
    ]
  },
  {
    path: '/',
    name: '导航二',
    component: lazyLoading('home'),
    iconCls: 'el-icon-date',
    children: [
      { path: '/splitPanel', name: '分割面板', component: lazyLoading('splitPanel') },
    ]
  },
  // 这里可以使用不同path来对应同一个组件Home
  // {
  //   path: '/demo2',
  //   name: '导航二',
  //   component: lazyLoading('home'),
  //   icon: '',
  //   children: [
  //     { path: '/demo2/splitPanel', name: '测试2', component: lazyLoading('splitPanel') },
  //   ]
  // },
  {
    path: '/',
    component: lazyLoading('home'),
    leaf: true,
    children: [
      { path: '/dirTree', iconCls: 'el-icon-bell', name: '目录树', component: lazyLoading('dirTree') },
    ]
  },
  {
    path: '/',
    name: '动态form',
    component: lazyLoading('home'),
    iconCls: 'el-icon-menu',
    children: [
      {path: '/mapForm', name: '渲染form', component: lazyLoading('mapForm')}
    ]
  },
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
const router = new VueRouter({ routes });
const menus = menuList(routes);
// 想要将内容处理成自己想要的比较困难，通过动态为数组内容添加字段然后在遍历的过程中通过字段来确定是否显示相对来说会简单一些
// 所以想要将数组的内容过滤掉相对来说会比较困难
export { menus, router };
