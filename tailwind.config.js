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
    require('daisyui'),
  ],
  /* eslint-enable global-require */
};
