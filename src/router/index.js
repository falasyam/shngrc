import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fancam from '../views/Fancam.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: 'Shania Gracia - Fansite'}
  },
  {
    path: '/about',
    name: 'About',
    meta: {title: 'Shania Gracia - About'},
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/fancam',
    name: 'Fancam',
    component: Fancam,
    meta: {title: 'Shania Gracia - Fancam'}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
});

export default router
