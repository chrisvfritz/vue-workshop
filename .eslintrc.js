// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'plugin:vue/recommended',
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
    'prettier/standard',
  ],
  rules: {
    // Only allow debugger in development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  overrides: [
    {
      files: ['src/**/*'],
      rules: {
        // Only allow `console.log` in development
        'no-console':
          process.env.NODE_ENV === 'production'
            ? ['error', { allow: ['warn', 'error'] }]
            : 'off',
      },
    },
    {
      files: ['**/*.unit.js'],
      env: { jest: true },
      globals: {
        createComponentMocks: false,
        createLocalVue: false,
        shallow: false,
        mount: false,
      },
    },
    {
      files: ['**/test/e2e/**/*'],
      plugins: ['cypress'],
      env: {
        'cypress/globals': true,
      },
    },
  ],
}
