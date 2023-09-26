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
        boldBlack: '#1e1e1e',
        boldBlackAlternative: '#2a2a2a',
        boldGrey: '#bdc1c7',
      },
      aspectRatio: {
        'cover': '35/38',
      },
    },
  },
  plugins: [],
}
export default config
