module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Plus Jakarta Sans',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      // theme:{
      //   fontSize:{
      //     base1:['18px','22px'],
      //     base2:['38px','47.88px'],

      //   }
      // },
      theme:{
        fontFamily: {
          Sans:['Plus Jakarta Sans', 'sans-serif']
        }
      },
      colors: {
        primary: '#0a0a0a',
        secondary:'#2E2E2E',
        secondary_1:'#454545',
        secondary_2:'#737373',



        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
      // backgroundColor: theme =>({
      //   ...theme('colors'),
      //   'secondary':'#454545',
      // })
    },
  },
  plugins: [],
};
