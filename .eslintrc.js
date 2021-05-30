
module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  extends: [
    'standard'
  ],
  plugins: [
    'svelte3'
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 2, maxEOF: 0 }],
    'import/first': ['error', '0']
  }
}
