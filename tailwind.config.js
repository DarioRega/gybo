/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontSize: {
      'heading-xxl': '5.3rem', // 98px,
      'heading-xl': '4.5rem', // 61px
      'heading-lg': '3.5rem', // 49px
      'heading-md': '2.4rem', // 35px
      'heading-sm': '2rem', // 24px
      'heading-xs': '1.6rem', // 20px
      'body-lg': '1.6rem', // 16px
      'body-md': '1.4rem', // 14px
      'body-sm': '1.2rem', // 12px
      'body-xs': '1rem', // 10px
    },
    fontFamily: {
      heading: ['Raleway', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1366px',
      xxl: '1920px',
    },
    extend: {
      colors: {
        brand: {
          grayish: '#6c6e64',
          'light-gray': '#f9fafb',
          'ligh-indigo': '#8da2fb',
          'dark-gray': '#3e3e3e',
          'dark-indigo': '#5850ec',
        },
      },
      lineHeight: {
        20: '6rem',
        19: '5.5rem',
        18: '5rem',
        17: '4.5rem',
        16: '4rem',
        15: '3.75rem',
        14: '3.5rem',
        13: '3.25rem',
        12: '3rem',
        11: '2.75rem',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: false, // process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
  },
};

