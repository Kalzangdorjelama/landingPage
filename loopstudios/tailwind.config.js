// tailwind.config.js
module.exports = {
  content: ['./*.html'], // ✅ path to your HTML files
  theme: {
    screens: {
      xs: '475px',
      sm: '480px',
      md: '850px',
      lg: '976px',
      xl: '1020px',
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.3em',
      },
    },
  },
  plugins: [],
}
