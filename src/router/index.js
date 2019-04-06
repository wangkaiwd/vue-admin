import lazyLoading from './lazyLoading'

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
      { path: '/list', name: 'List', component: lazyLoading('list') },
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
]

export default routes
