import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050d09',
          900: '#091a12',
          850: '#0b2218',
          800: '#01342b',
        },
        forest: {
          900: '#043b21',
          800: '#06634d',
          700: '#226f3e',
          500: '#2ee76f',
          400: '#5cf093',
        },
        cream: '#f4fbf6',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(ellipse at top, rgba(46,231,111,0.18), transparent 60%)',
        'forest-gradient':
          'linear-gradient(135deg, #043b21 0%, #06634d 50%, #2ee76f 100%)',
        'forest-radial':
          'radial-gradient(circle at 30% 20%, #06634d 0%, #043b21 40%, #091a12 100%)',
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(46,231,111,0.55)',
        'glow-soft': '0 0 80px -20px rgba(46,231,111,0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        scan: 'scan 6s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
