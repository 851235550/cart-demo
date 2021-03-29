import { createRouter, createWebHistory } from 'vue-router'
import Cart from '../views/Cart.vue'

const routes = [
  {
    path: '/',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/settle',
    name: 'Settle',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Settle.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
