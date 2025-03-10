module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          purple: {
            50: '#F3E8FF',
            100: '#E4CCFF',
            200: '#C9A3FF',
            300: '#AD7AFF',
            400: '#9252FC',
            500: '#7629FA',
            600: '#B358F7', // Primary brand color
            700: '#9440d3', // Darker shade
            800: '#6B1FD7',
            900: '#5512AE',
          },
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }