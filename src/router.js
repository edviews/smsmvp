import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ './views/dashboard.vue'),
      children: [
        {
          path: 'home',
          name: 'hoome',
          component: () => import(/* webpackChunkName: "dashboard-module" */ './modules/dashboard.vue') 
        },
        {
          path: 'students',
          name: 'students',
          component: () => import(/* webpackChunkName: "students-module" */ './modules/students.vue')
        }
      ]
    },
  ]
})
