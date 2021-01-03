/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    [
      '@snowpack/plugin-svelte',
      {
        hmrOptions: {
          preserveLocalState: false,
        },
      },
    ],
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-postcss',
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    rollup: {
      dedupe: ['svelte'],
    },
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {},
};
