import Vue from 'vue'
import VueRouter from 'vue-router'
import CatalogOfProducts from '../components/CatalogOfProducts'
import BasketProducts from '../components/BasketProducts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CatalogOfProducts',
    component: CatalogOfProducts
  },
  {
    path: '/baskets',
    name: 'BasketProducts',
    component: BasketProducts
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router