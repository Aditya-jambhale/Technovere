// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				space: ["Space Grotesk", "system-ui", "sans-serif"],
				poppins: ["Poppins", "system-ui", "sans-serif"],
			},
			backgroundImage: {
				'grid-pattern': `linear-gradient(rgba(255, 221, 0, 0.2) 1px, transparent 1px),
                     linear-gradient(90deg, rgba(255, 221, 0, 0.2) 1px, transparent 1px)`,
			},
			backgroundSize: {
				"grid-size": "50px 50px",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))",
				},
				electric: "#6366F1",
				"electric-light": "#8B5CF6",
				cyber: "#10B981",
				neon: "#F59E0B",
				dark: "#0F172A",
				"dark-light": "#1E293B",
				"accent-purple": "#8B5CF6",
				"accent-teal": "#14B8A6",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				/* moving grid */
				moveGrid: {
					"0%": { backgroundPosition: "0 0" },
					"100%": { backgroundPosition: "50px 50px" },
				},
				glowPulse: {
					"0%": { opacity: "0.5", filter: "drop-shadow(0 0 2px #00adef)" },
					"100%": { opacity: "1", filter: "drop-shadow(0 0 6px #00adef)" },
				},
				/* Radix Accordions */
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				/* Entrance/exit */
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"slide-in-left": {
					"0%": { opacity: "0", transform: "translateX(-30px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				"slide-in-right": {
					"0%": { opacity: "0", transform: "translateX(30px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				"scale-in": {
					"0%": { opacity: "0", transform: "scale(0.95)" },
					"100%": { opacity: "1", transform: "scale(1)" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				glow: {
					"0%, 100%": { opacity: "0.5" },
					"50%": { opacity: "1" },
				},
				"pulse-slow": {
					"0%, 100%": { opacity: "0.3" },
					"50%": { opacity: "0.8" },
				},
			},
			animation: {
				"grid-move": "moveGrid 10s linear infinite",
				glowPulse: "glowPulse 2s ease-in-out infinite alternate",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.6s ease-out",
				"slide-in-left": "slide-in-left 0.6s ease-out",
				"slide-in-right": "slide-in-right 0.6s ease-out",
				"scale-in": "scale-in 0.4s ease-out",
				float: "float 3s ease-in-out infinite",
				glow: "glow 2s ease-in-out infinite",
				"pulse-slow": "pulse-slow 3s ease-in-out infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
