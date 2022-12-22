module.exports = {
    loader: "css-loader",
    options: {
      modules: true,
      importLoaders: 1,
      sourceMap: true
    },
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './src/pages/**/*.{html,js}',
      './src/components/**/*.{html,js}',
    ],
    darkMode: 'class',
    theme: {
      colors: {
        'blue-theme': 'rgb(26,151,245)',
        'green-theme': 'rgb(3,201,215)',
        'purple-theme': 'rgb(115,82,255)',
        'red-theme': 'rgb(255,92,142)',
        'indigo-theme': 'rgb(30,77,183)',
        'orange-theme': 'rgb(251,150,120)',
        'default-theme': 'rgb(129,129,129)',
        'whit': 'd5d5d5',
      },
      safelist: [
        'blue-theme', 
        'green-theme',
        'purple-theme',
        'red-theme', 
        'indigo-theme',
        'orange-theme',
        'default-theme'
      ],
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      extend: {
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
          'main-bg': '#FAFBFB',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
        },
        minHeight: {
          590: '590px',
        },
        backgroundImage: {
          'hero-pattern':
            "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
        },
      },
    },
    plugins: [],
  };