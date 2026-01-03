/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Institutional Infrastructure Palette
        'void-blue': '#0A192F',
        'tech-slate': '#1E293B',
        'trust-cyan': '#00B4D8',
        'primary-text': '#FFFFFF',
        'secondary-text': '#94A3B8',
        
        // Enhanced color system
        trust: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#94A3B8', // Secondary text
          400: '#64748b',
          500: '#475569',
          600: '#334155',
          700: '#1E293B', // Technical slate
          800: '#0f172a',
          900: '#0A192F', // Void blue
        },
        data: {
          blue: '#2563eb',
          green: '#059669',
          orange: '#d97706',
          purple: '#7c3aed',
          teal: '#0d9488',
          cyan: '#00B4D8', // Trust cyan
        },
      },
      fontFamily:{
        'inter': ['Inter', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
        Outfit:["Outfit", "sans-serif"],
        Ovo:["Ovo","serif"] 
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff',
        'glow': '0 0 20px rgba(147, 51, 234, 0.5)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.5)',
      },
     gridTemplateColumns: {
      'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
     },
     animation: {
       'gradient': 'gradient 8s ease infinite',
       'float': 'float 6s ease-in-out infinite',
       'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
     },
     keyframes: {
       gradient: {
         '0%, 100%': {
           'background-size': '200% 200%',
           'background-position': 'left center'
         },
         '50%': {
           'background-size': '200% 200%',
           'background-position': 'right center'
         },
       },
       float: {
         '0%, 100%': { transform: 'translateY(0px)' },
         '50%': { transform: 'translateY(-20px)' },
       }
     },
     backgroundSize: {
       '300%': '300%',
     } 

    },
  },
  darkMode:'selector',   
  plugins: [],
};
