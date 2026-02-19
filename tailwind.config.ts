import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        bg: 'hsl(var(--bg))',
        fg: 'hsl(var(--fg))',
        muted: 'hsl(var(--muted))',
        card: 'hsl(var(--card))',
        border: 'hsl(var(--border))',
        accent: 'hsl(var(--accent))',
        accent2: 'hsl(var(--accent2))',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)',
        crisp: '0 8px 24px rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
