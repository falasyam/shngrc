import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Video from '../views/Video.vue'
import Photo from '../views/Photo.vue'

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
    path: '/video',
    name: 'Video',
    component: Video,
    meta: {title: 'Shania Gracia - Video'}
  },
  {
    path: '/photo',
    name: 'Photo',
    component: Photo,
    meta: {title: 'Shania Gracia - Photo'}
  }
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
