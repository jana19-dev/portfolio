
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
  ignorePatterns: ['**/build/*'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': 0,
        'import/no-duplicates': 0,
        'import/no-mutable-exports': 0
      }
    }
  ],
  rules: {
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 2, maxEOF: 0 }]
  },
  settings: {
    'svelte3/ignore-styles': () => true
  }
}
