/**
 * The file enables `@state/store.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */
import camelCase from 'lodash/camelCase'

const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  if (key === './index.js' || /\.unit\.js$/.test(key)) return
  const moduleName = camelCase(key.replace(/(\.\/|\.js)/g, ''))
  modules[moduleName] = {
    namespaced: true,
    ...files(key),
  }
})

export default modules
