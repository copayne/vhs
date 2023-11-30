import { type Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'default': {
          'background': '#ABB5B8',
          'black': '#202020',
          'white': '#E0E0E0',
          'purple': '#3C247A',
          'pink': '#C8357B',
          'red': '#F32228',
          'orange': '#F87F16',
        },
      },
      dropShadow: {
        'sticker': [
          '1px 0 1px rgba(0, 0, 0, .25)',
          '-1px 0 1px rgba(0, 0, 0, .25)',
        ],
      }
    },
  },
  plugins: [],
} satisfies Config;
