module.exports = {
  testMatch: ['**/?(*.)unit.js'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: require('./build/aliases').jest,
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.vue$': '<rootDir>/node_modules/vue-jest',
  },
  setupFiles: ['<rootDir>/test/unit/setup'],
  mapCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!**/node_modules/**',
    '!src/main.js',
    '!src/router/index.js',
    '!src/router/routes.js',
    '!src/state/store.js',
    '!src/state/helpers.js',
    '!src/state/modules/index.js',
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
}
