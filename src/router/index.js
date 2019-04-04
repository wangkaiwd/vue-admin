import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const getComponent = dir => () => import(`views/${dir}`)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: getComponent('home')
    },
    {
      path: '*',
      name: '404',
      component: getComponent('notFound')
    }
  ]
})
