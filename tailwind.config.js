/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
          'gradient-shift': 'gradient-shift 6s ease infinite',
          'text-glow': 'text-glow 3s ease-in-out infinite',
          'blob': 'blob 7s infinite',
          'card-float': 'card-float 4s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-20px) rotate(180deg)' },
          },
          'pulse-glow': {
            '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
            '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)' },
          },
          'gradient-shift': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
          'text-glow': {
            '0%, 100%': { textShadow: '0 0 20px rgba(139, 92, 246, 0.5)' },
            '50%': { textShadow: '0 0 40px rgba(236, 72, 153, 0.8)' },
          },
          blob: {
            '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
            '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
            '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          },
          'card-float': {
            '0%, 100%': { transform: 'translateY(0px) rotateY(0deg)' },
            '50%': { transform: 'translateY(-10px) rotateY(5deg)' },
          },
        },
        backdropBlur: {
          xs: '2px',
        },
        perspective: {
          '1000': '1000px',
        },
      },
    },
    plugins: [],
  }