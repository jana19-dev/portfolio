const sveltePreprocess = require('svelte-preprocess')

const preprocess = sveltePreprocess({
  postcss: {
    plugins: [require('autoprefixer')]
  }
})

module.exports = {
  preprocess
}
