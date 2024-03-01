import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-bg': "url('/top-screen_bg.jpg')",
				'hero-woman': "url('/top-screen_woman.png')",
				'check-green': "url('/check-green.svg')",
				'licenses-bg': "url('/licenses_bg.jpg')",
				loupe: "url('/loupe.svg')",
			},
			keyframes: {
				overlayShow: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				overlayHide: {
					from: { opacity: '1' },
					to: { opacity: '0' },
				},
				slideIn: {
					from: { scale: '0.95', opacity: '0' },
					to: { scale: '1', opacity: '1' },
				},
				slideOut: {
					from: { scale: '1', opacity: '1' },
					to: { scale: '0.95', opacity: '0' },
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				rotateDown: {
					from: { rotate: '0deg' },
					to: { rotate: '90deg' },
				},
				rotationForwardLoader: {
					from: { rotate: '0deg' },
					to: { rotate: '360deg' },
				},
				rotationBackLoader: {
					from: { rotate: '0deg' },
					to: { rotate: '-360deg' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				overlayShow: 'overlayShow 0.3s ease-in-out',
				overlayHide: 'overlayHide 0.3s ease-in-out',
				rotateDown: 'rotateDown 0.2s ease-out',
				slideOut: 'slideOut 0.3s ease-in-out',
				slideIn: 'slideIn 0.3s ease-in-out',
				rotaionF: 'rotationForwardLoader 2s linear infinite',
				rotaionB: 'rotationBack 1s linear infinite',
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		require('tailwind-scrollbar')({ nocompatible: true }),
	],
};
export default config;
