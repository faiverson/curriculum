import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        plex: ['var(--font-plex)'],
        source: ['var(--font-source)'],
      },
      colors: {
        'bg-site': {
          light: '#67e8f9',
          DEFAULT: '#121212',
          dark: '#121212',
        },
        'bold-black': {
          light: '#67e8f9',
          DEFAULT: '#1e1e1e',
          dark: '#1e1e1e',
        },
        'bold-black-alternative': {
          light: '#67e8f9',
          DEFAULT: '#2a2a2a',
          dark: '#2a2a2a',
        },
        'bold-black-grey': {
          light: '#67e8f9',
          DEFAULT: '#BDC1C7',
          dark: '#BDC1C7',
        },
        'background': {
          light: '#AAe8f9',
          DEFAULT: '#3D4147',
          dark: '#3D4147',
        },
        'blue-confetti': '#2D70F6',
        'yellow-confetti': '#F3FD53',
        'light-grey': '#d3d6d9',
      },
      aspectRatio: {
        'cover': '35/38',
      },
    },
  },
  plugins: [],
}
export default config
