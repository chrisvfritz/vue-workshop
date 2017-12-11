import vueTestUtils from 'vue-test-utils'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.mixin({
  created() {
    this.$style = this.$style || {}
  },
})

for (const utilName in vueTestUtils) {
  global[utilName] = vueTestUtils[utilName]
}

global.createComponentMocks = ({ store, router, style, mocks, stubs }) => {
  const localVue = vueTestUtils.createLocalVue()
  const returnOptions = { localVue }
  returnOptions.stubs = mocks || {}
  returnOptions.mocks = stubs || {}

  if (store) {
    localVue.use(Vuex)
    returnOptions.store = new Vuex.Store({
      state: store.state || {},
      getters: store.getters || {},
      actions: store.actions || {},
    })
  }

  if (router) {
    returnOptions.stubs['router-link'] = true
    returnOptions.stubs['router-view'] = true
  }

  if (style) {
    returnOptions.mocks.$style = style
  }

  return returnOptions
}
