import type { Config } from 'tailwindcss'

const config: Config = {
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
        'bold-black': '#1e1e1e',
        'bold-black-alternative': '#2a2a2a',
        'bold-grey': '#BDC1C7',
        'background': '#3D4147',
        'blue-confetti': '#2D70F6',
        'yellow-confetti': '#F3FD53',
      },
      aspectRatio: {
        'cover': '35/38',
      },
    },
  },
  plugins: [],
}
export default config
