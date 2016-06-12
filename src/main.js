import Vue from 'vue'
import VueRouter from 'vue-router'

import configureRoutes from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
  history: true,
  saveScrollPosition: false,
  linkActiveClass: 'active'
})
configureRoutes(router)
router.start({}, 'html')
