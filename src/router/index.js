import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '../views/ProductView.vue'
import Cart from '../views/CartView.vue'

// import Products from '../views/ProductView.vue'

//const Cart = {template: '<div>Cart</div>'}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'product',
    component: Product
  },
  {
    path: '/cart',
    name:'cart',
    component: Cart
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
