/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        screens: {
            xs: '360px',
            '2xs': '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        },
        fontFamily: {
            notoSans: ['NotoSans']
        },
        extend: {
            colors: {
                // brand: 'rgb(var(--color-brand) / <alpha-value>)',
                dark: '#1c1917',
                success: '#B5F4AF',
                'light-dark': '#171e2e',
                white: '#ffffff',
                brand: '#FE5B02',
                black: {
                    100: '#F8F9FA',
                    200: '#E9ECEF',
                    300: '#DEE2E6',
                    400: '#CED4DA',
                    500: '#ADB5BD',
                    600: '#6C757D',
                    700: '#495057',
                    800: '#343A40',
                    900: '#212529',

                    DEFAULT: '#000000'
                },
                red: {
                    100: '#FFECE7',
                    500: '#EA400E',
                    DEFAULT: '#EA400E'
                },
                orange: {
                    500: '#EB8E07',
                    DEFAULT: '#EB8E07'
                }
            },
            animation: {
                blink: 'blink 1.4s infinite both;',
                'spin-slow': 'spinSlow 5s linear infinite',
                'move-up': 'moveUp 500ms infinite alternate',
                'scale-up': 'scale-110',
                'scale-down': 'scaleDown 500ms infinite alternate',
                'drip-expand': 'expand 500ms ease-in forwards',
                'drip-expand-large': 'expand-large 600ms ease-in forwards',
                'move-up-small': 'moveUpSmall 500ms infinite alternate',
                wiggle: 'wiggle 1s ease-in-out infinite'
            },
            keyframes: {
                blink: {
                    '0%': { opacity: 0.2 },
                    '20%': { opacity: 1 },
                    '100%': { opacity: 0.2 }
                },
                spinSlow: {
                    '0%': { transform: 'rotate3d(0, 1, 0, 0deg)' },
                    '25%': { transform: 'rotate3d(0, 1, 0, 90deg)' },
                    '50%': { transform: 'rotate3d(0, 1, 0, 180deg)' },
                    '75%': { transform: 'rotate3d(0, 1, 0, 270deg)' },
                    '100%': { transform: 'rotate3d(0, 1, 0, 360deg)' }
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' }
                },
                expand: {
                    '0%': {
                        opacity: 0,
                        transform: 'scale(1)'
                    },
                    '30%': {
                        opacity: 1
                    },
                    '80%': {
                        opacity: 0.5
                    },
                    '100%': {
                        transform: 'scale(30)',
                        opacity: 0
                    }
                },
                'expand-large': {
                    '0%': {
                        opacity: 0,
                        transform: 'scale(1)'
                    },
                    '30%': {
                        opacity: 1
                    },
                    '80%': {
                        opacity: 0.5
                    },
                    '100%': {
                        transform: 'scale(96)',
                        opacity: 0
                    }
                },
                moveUp: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-20px)' }
                },
                moveUpSmall: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-10px)' }
                },
                scaleDown: {
                    '0%': { transform: 'scale(0)' },
                    '100%': { transform: 'scale(1)' }
                },
                scaleUp: {
                    '100%': { transform: 'scale(1.1)' },
                    '0%': { transform: 'scale(1)' }
                }
            }
        }
    },
    // variants: {
    //     extends: {
    //         scrollbar: ['rounded']
    //     }
    // },
    plugins: []
};
