const path = require('path')

function resolveSrc(_path) {
  return path.join(__dirname, '../', _path)
}

const aliases = {
  '@': '.',
  '@pages': 'src/router/pages',
  '@layouts': 'src/router/layouts',
  '@components': 'src/components',
  '@assets': 'src/assets',
  '@utils': 'src/utils',
  '@state': 'src/state',
  '@content': 'src/content',
  '@design-variables': 'src/design-variables.scss',
  '@styles': 'src/styles',
}

module.exports = {
  webpack: {},
  jest: {},
}

for (const alias in aliases) {
  module.exports.webpack[alias] = resolveSrc(aliases[alias])
  module.exports.jest['^' + alias + '/(.*)$'] =
    '<rootDir>/' + aliases[alias] + '/$1'
}
