/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' }
  },
  plugins: [
    '@snowpack/plugin-svelte'
  ],
  routes: [
    /* Example: Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
  },
  buildOptions: {
    /* ... */
  }
}
