import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ 'views/home/Home.vue')
const Category = () =>
  import(/* webpackChunkName: "about" */ 'views/category/Category.vue')
const Cart = () => import(/* webpackChunkName: "cart" */ 'views/cart/Cart.vue')
const Me = () => import(/* webpackChunkName: "me" */ 'views/me/Me.vue')
const Detail = () =>
  import(/* webpackChunkName: "detail" */ 'views/detail/Detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  },
  {
    path: '/detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
