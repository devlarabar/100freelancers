/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
		themes: [{
			light: {
				// ...require("daisyui/src/theming/themes")["[data-theme=emerald]"],
                "primary": "#F1F6F9",
                "secondary": "#142833",
                "accent": "#0089B6",
                "neutral": "#fff",
                "base-100": "#D7E4EB",
            }
		}, {
			dark: {
				// ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
                "primary": "#355565",
                "secondary": "#D7E4EB",
                "accent": "#0089B6",
                "neutral": "#fff",
                "base-100": "#142833",
            }
		}],
	},
}
