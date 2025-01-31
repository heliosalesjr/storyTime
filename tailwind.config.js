/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: 'class', // Habilita o dark mode baseado em classes
    theme: {
      extend: {
        colors: {
          primary: '#FF6F61', // Cor primária vibrante
          secondary: '#6B5B95', // Cor secundária
          accent: '#88B04B', // Cor de destaque
          background: '#F7CAC9', // Cor de fundo suave
          text: '#2E2E2E', // Cor do texto
          dark: {
            primary: '#FFA07A', // Cor primária no dark mode
            secondary: '#8A4F7D', // Cor secundária no dark mode
            background: '#2E2E2E', // Cor de fundo no dark mode
            text: '#FFFFFF', // Cor do texto no dark mode
          },
        },
        fontFamily: {
          kids: ['"Comic Sans MS"', 'cursive'], // Fonte infantil
        },
      },
    },
    plugins: [],
  };