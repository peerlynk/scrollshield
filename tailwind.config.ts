import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#080806',
          secondary: '#0D0D09',
          tertiary: '#12110D',
          elevated: '#171611',
        },
        surface: {
          primary: '#171611',
          secondary: '#201E18',
          raised: '#29261F',
          border: '#353229',
        },
        text: {
          primary: '#F4F1E8',
          secondary: '#AAA69A',
          muted: '#777269',
        },
        border: {
          subtle: '#353229',
          active: '#4A463B',
        },
        sage: {
          DEFAULT: '#91A989',
          light: '#B4C7AE',
          dark: '#6E8566',
        },
        sand: {
          DEFAULT: '#E0C99E',
          dark: '#C7B085',
        },
        amber: {
          brand: '#C9954F',
        },
        coral: {
          brand: '#D76259',
        },
        crimson: {
          brand: '#A53E3A',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #F4F1E8 0%, #91A989 100%)',
        'gradient-success': 'linear-gradient(135deg, #91A989 0%, #E0C99E 100%)',
        'gradient-warning': 'linear-gradient(135deg, #E0C99E 0%, #C9954F 100%)',
        'gradient-danger': 'linear-gradient(135deg, #D76259 0%, #A53E3A 100%)',
        'gradient-cinematic': 'linear-gradient(180deg, #1C1A15 0%, #0D0E0C 100%)',
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(145, 169, 137, 0.12) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-sage': '0 0 24px -4px rgba(145, 169, 137, 0.25)',
        'glow-sand': '0 0 24px -4px rgba(224, 201, 158, 0.25)',
        'card-raised': '0 12px 32px -8px rgba(0, 0, 0, 0.5)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
