import { getComponent } from './lazyComponent';
export default [
  {
    path: '/',
    exact: true,
    name: 'home',
    component: getComponent('home'),
    meta: {
      keepAlive: true
    }
  }
];
