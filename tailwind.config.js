const { inset } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#222222',
          dark: '#171717'
        }
      },
      fontFamily: {
        sans: ['Proxima Nova', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Ubuntu', 'Helvetica', 'Arial', 'sans-serif']
      },
      container: {
        padding: {
          default: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem'
        }
      },
      inset: {
        ...inset,
        '-64': '-16rem'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  }
}
