/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { bg:'#0f0f0f', panel:'#1a1a1a', ink:'#f5f5f5', muted:'#b5b5b5', gold:'#ffd700' },
    boxShadow: { glow: '0 0 40px rgba(255,215,0,.15)' }
  }},
  plugins: []
}
