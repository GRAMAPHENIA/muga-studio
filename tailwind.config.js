/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Colores principales de la paleta MUGA STUDIO (Light Mode)
        'accent': '#FF5353',
        'accentmd': '#FF7A7A',
        'accentxs': '#FFE5E5',
        'obscure': '#FFFFFF',
        'mugagray': '#F8F9FA',
        'graylight': '#6B7280',
        
        // Colores para uso en componentes
        'muga': {
          'primary': '#FF5353',
          'light': {
            '50': '#FFFFFF',
            '100': '#F8F9FA',
            '200': '#E5E7EB',
          },
          'neutral': '#6B7280',
          'text': {
            'primary': '#111827',
            'secondary': '#6B7280',
          }
        }
      }
    },
  },
  plugins: [],
};
