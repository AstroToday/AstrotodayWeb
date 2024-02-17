import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   // sans: [`var(--font-openSans)`, 'sans-serif'],
      // },
      colors: {
        primary: '#FF872B',
        secondary: '#3ad153',
        tertiary: '#12ce29',
      },
    },
  },
  plugins: [],
};
export default config;
