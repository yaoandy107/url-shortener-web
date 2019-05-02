import Vue from 'vue'
import Router from 'vue-router'
import UrlShortener from './views/UrlShortener.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/url-shortener'
    },
    {
      path: '/url-shortener',
      name: 'url-shortener',
      component: UrlShortener
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
