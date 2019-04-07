import lazyLoading from './lazyLoading';
import menuList from './generateMenus';

const routes = [
  {
    path: '/',
    name: '导航一',
    component: lazyLoading('home'),
    icon: '',
    children: [
      { path: '/main', name: '主页', component: lazyLoading('main') },
      { path: '/table', name: 'Table', component: lazyLoading('table') },
      { path: '/form', name: 'Form', component: lazyLoading('form') },
      { path: '/list', name: '列表', component: lazyLoading('list') },
    ]
  },
  {
    path: '/',
    name: '导航二',
    component: lazyLoading('home'),
    icon: '',
    children: [
      { path: '/group2', name: '测试2', component: lazyLoading('group2') },
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
const menus = menuList(routes);
// 想要将内容处理成自己想要的比较困难，通过动态为数组内容添加字段然后在遍历的过程中通过字段来确定是否显示相对来说会简单一些
// 所以想要将数组的内容过滤掉相对来说会比较困难
export { routes, menus };
