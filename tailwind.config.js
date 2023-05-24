/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'max-2xl': {'max': '1535px'},
      'max-xl': {'max': '1279px'},
      'max-1024': {'max': '1024px'},
      'max-768': {'max': '768px'},
      'max-600': {'max': '600px'},
      'max-500': {'max': '500px'},
      'max-350': {'max': '350px'},
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
