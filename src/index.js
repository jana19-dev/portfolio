import './TailwindStyles.svelte'

import App from './App.svelte'

export default new App({
  target: document.body
})

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
