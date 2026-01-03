/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Lato', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			colors: {
				primary: {
					DEFAULT: '#1772d0',
					hover: '#f09228'
				}
			}
		}
	},
	plugins: []
};
