import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#FFF3E0',
          text: '#401A06',
          button: '#008080E6',
        },
        dark: {
          bg: '#1e180e',
          text: '#FAFAF9',
          button: '#00B3B3',
        },
      },
    },
  },
  plugins: [],
} satisfies Config