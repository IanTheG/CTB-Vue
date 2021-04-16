import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mystery from '../views/Mystery.vue'
import ClosingPrayers from '../views/ClosingPrayers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/closing-prayers',
    name: 'ClosingPrayers',
    component: ClosingPrayers
  },
  {
    path: '/:mystery',
    name: 'MysteryNoId',
    component: Mystery
  },
  {
    path: '/:mystery/:id',
    name: 'Mystery',
    component: Mystery
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
