import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Employee from './views/Employee.vue'
import Graph from './views/Graph.vue'

Vue.use(Router)
Vue.use(window.VueCharts)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/employee',
      name: 'employee',
      component: Employee
    },
    {
      path: '/graph',
      name: 'graph',
      component: Graph
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
