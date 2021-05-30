module.exports = {
  // mode: 'jit',
  purge: {
    content: [
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,svelte}'
    ]
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  theme: {
    extend: {
      keyframes: {
        logo: {
          from: {
            transform: 'scale(1)'
          },
          to: {
            transform: 'scale(1.16)'
          }
        },
        upDown: {
          from: {
            transform: 'translateY(0)'
          },
          to: {
            transform: 'translateY(200px)'
          }
        },
        upDownWide: {
          from: {
            transform: 'translateY(0)'
          },
          to: {
            transform: 'translateY(600px)'
          }
        }
      },
      animation: {
        logo: 'logo 1.6s ease-in-out infinite alternate',
        upDown: 'upDown 14s ease-in-out infinite alternate',
        upDownWide: 'upDownWide 18s ease-in-out infinite alternate'
      }
    }
  },
  variants: {},
  plugins: []
}
