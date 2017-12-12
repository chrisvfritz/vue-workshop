import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import { sync } from 'vuex-router-sync'
import store from '@state/store'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(VueMeta, {
  // The component option name that vue-meta looks for meta info on.
  keyName: 'page',
})

const router = new VueRouter({
  mode: 'history',
  routes,
})

sync(store, router)

export default router
