// client/tailwind.config.js

// We need to import the text-shadow plugin
const plugin = require('tailwindcss/plugin');

// client/tailwind.config.js (add inside theme)
module.exports = {
  // ...existing config...
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00d0ff',
          600: '#00b8d4',
          400: '#2ce7ff'
        },
        accent: '#7b5cff',
        darkbg: '#060606',
        surface: '#0f0f10',
        muted: '#9ca3af'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'serif'],
        arcade: ['"Press Start 2P"', 'ui-monospace']
      }
    }
  }
}
