import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', "[class~='dark']"],
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
        'site': '#121212',
        'bold-black': '#1e1e1e',
        'bold-black-alternative': '#2a2a2a',
        'bold-grey': '#BDC1C7',
        'background': '#3D4147',
        'blue-confetti': '#2D70F6',
        'red-confetti': '#F62D70',
        'turquoise-confetti': '#2DF6BB',
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
