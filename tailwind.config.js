module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  /* eslint-disable global-require */
  plugins: [
    require('@tailwindcss/forms')({

      strategy: 'class',
    }),
  ],
  /* eslint-enable global-require */
};
