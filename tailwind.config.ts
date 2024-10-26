import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#FCF0F6',
  				'100': '#FAE1ED',
  				'200': '#F5B8D1',
  				'300': '#F090B1',
  				'400': '#E34464',
  				'600': '#C2000D',
  				'700': '#A10008',
  				'800': '#800006',
  				'900': '#610005',
  				'950': '#3D0003',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		dropShadow: {
  			radar: [          '0px 0px 18.32px rgba(233, 5, 21, 1)',          '0px 0px 36.65px rgba(233, 5, 21, 1)',          '0px 0px 128.27px rgba(233, 5, 21, 1)',          '0px 0px 256.55px rgba(233, 5, 21, 1)',          '0px 0px 439.79px rgba(233, 5, 21, 1)',          '0px 0px 769.64px rgba(233, 5, 21, 1)',        ],
  			glowingDot: [        '0px 0px 0.96px rgba(255, 255, 255, 1)',          '0px 0px 1.92px rgba(255, 255, 255, 1)',          '0px 0px 6.72px rgba(255, 255, 255, 1)',          '0px 0px 13.44px rgba(255, 255, 255, 1)',          '0px 0px 23.04px rgba(255, 255, 255, 1)',          '0px 0px 40.32px rgba(255, 255, 255, 1)',        ]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
    plugins: [require("tailwindcss-animate")]
};
export default config;
