module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      icons: ['iconos_londonmanager'],
      mono: ['Roboto Mono', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['"Open Sans"']
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        negro1: '#141414',
        negro2: '#292829',
        negro3: '#3D3B3C',
        gris1: '#E6E6E6',
        gris2: '#D3D3D3',
        gris3: '#848484',
        blanco1: '#FFFFFF',
        blanco2: '#FDFDFD',
        blanco3: '#F0F0F0',
        verde: '#0a9d7b',
        rojo: '#DB4837',
        amarillo: '#F2AF29',
        violeta: '#565C9A',
        celeste: '#00A3F5',
        scroll: 'rgba(74,72,74,0.6)'
      },
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
  ],
  variants: {
      scrollbar: ['rounded']
  }
}
