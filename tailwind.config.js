module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4A90E2", // electric-blue
          50: "#E8F2FF", // electric-blue-50
          100: "#D1E5FF", // electric-blue-100
          200: "#A3CBFF", // electric-blue-200
          300: "#75B1FF", // electric-blue-300
          400: "#4A90E2", // electric-blue-400
          500: "#4A90E2", // electric-blue-500
          600: "#3B73B5", // electric-blue-600
          700: "#2C5688", // electric-blue-700
          800: "#1D395B", // electric-blue-800
          900: "#0E1C2E", // electric-blue-900
        },
        secondary: {
          DEFAULT: "#E94B8C", // cyberpunk-pink
          50: "#FDF2F8", // cyberpunk-pink-50
          100: "#FCE7F3", // cyberpunk-pink-100
          200: "#FBCFE8", // cyberpunk-pink-200
          300: "#F9A8D4", // cyberpunk-pink-300
          400: "#F472B6", // cyberpunk-pink-400
          500: "#E94B8C", // cyberpunk-pink-500
          600: "#DB2777", // cyberpunk-pink-600
          700: "#BE185D", // cyberpunk-pink-700
          800: "#9D174D", // cyberpunk-pink-800
          900: "#831843", // cyberpunk-pink-900
        },
        accent: {
          DEFAULT: "#00D4FF", // bright-cyan
          50: "#ECFEFF", // bright-cyan-50
          100: "#CFFAFE", // bright-cyan-100
          200: "#A5F3FC", // bright-cyan-200
          300: "#67E8F9", // bright-cyan-300
          400: "#22D3EE", // bright-cyan-400
          500: "#00D4FF", // bright-cyan-500
          600: "#0891B2", // bright-cyan-600
          700: "#0E7490", // bright-cyan-700
          800: "#155E75", // bright-cyan-800
          900: "#164E63", // bright-cyan-900
        },
        background: "#0A0A0A", // deep-space
        surface: {
          DEFAULT: "#1A1A1A", // elevated-surface
          light: "#2A2A2A", // elevated-surface-light
        },
        text: {
          primary: "#FFFFFF", // white
          secondary: "#B0B0B0", // gray-400
          muted: "#808080", // gray-500
        },
        success: {
          DEFAULT: "#00FF88", // gaming-green
          50: "#ECFDF5", // gaming-green-50
          100: "#D1FAE5", // gaming-green-100
          200: "#A7F3D0", // gaming-green-200
          300: "#6EE7B7", // gaming-green-300
          400: "#34D399", // gaming-green-400
          500: "#00FF88", // gaming-green-500
          600: "#059669", // gaming-green-600
          700: "#047857", // gaming-green-700
          800: "#065F46", // gaming-green-800
          900: "#064E3B", // gaming-green-900
        },
        warning: {
          DEFAULT: "#FFB800", // amber-alert
          50: "#FFFBEB", // amber-alert-50
          100: "#FEF3C7", // amber-alert-100
          200: "#FDE68A", // amber-alert-200
          300: "#FCD34D", // amber-alert-300
          400: "#FBBF24", // amber-alert-400
          500: "#FFB800", // amber-alert-500
          600: "#D97706", // amber-alert-600
          700: "#B45309", // amber-alert-700
          800: "#92400E", // amber-alert-800
          900: "#78350F", // amber-alert-900
        },
        error: {
          DEFAULT: "#FF4757", // clear-red
          50: "#FEF2F2", // clear-red-50
          100: "#FEE2E2", // clear-red-100
          200: "#FECACA", // clear-red-200
          300: "#FCA5A5", // clear-red-300
          400: "#F87171", // clear-red-400
          500: "#FF4757", // clear-red-500
          600: "#DC2626", // clear-red-600
          700: "#B91C1C", // clear-red-700
          800: "#991B1B", // clear-red-800
          900: "#7F1D1D", // clear-red-900
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'], // Headlines
        inter: ['Inter', 'sans-serif'], // Body text
        rajdhani: ['Rajdhani', 'sans-serif'], // CTAs
        'fira-code': ['Fira Code', 'monospace'], // Code/Accents
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'glow-primary': '0 0 8px rgba(74, 144, 226, 0.5)',
        'glow-accent': '0 0 8px rgba(0, 212, 255, 0.5)',
        'cyber': '0 8px 32px rgba(0, 212, 255, 0.3)',
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      transitionDuration: {
        '300': '300ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-out',
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}