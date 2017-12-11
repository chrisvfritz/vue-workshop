import Vue from 'vue'
import App from './app'
import store from './state/store'
import router from './router'

Vue.config.productionTip = false

const requireComponent = require.context(
  './components',
  false,
  /app-[\w-]+\.vue$/
)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = require('lodash/upperFirst')(
    require('lodash/camelCase')(
      fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
    )
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})
