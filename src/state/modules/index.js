/**
 * The file enables `@state/store.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */
import camelCase from 'lodash/camelCase'

const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  if (key === './index.js' || /\.unit\.js$/.test(key)) return
  modules[camelCase(key.replace(/(\.\/|\.js)/g, ''))] = files(key).default
})

export default modules
