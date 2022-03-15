module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blanco: '#ffffff',
      grisclaro: '#f3f3f3',
      grismedio: '#848484',
      grisoscuro: '#1B1C23',
      violeta: '#565D98',
      verde: '#1B9C7B',
      scroll: 'rgba(74,72,74,0.6)'
    },
    fontFamily: {
      sans: ['Roboto', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['Roboto Mono', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['"Open Sans"']
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite'
      },
      keyframes: {
        bars: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ]
}
