import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': {
                    '50': '#f1f9fe',
                    '100': '#e2f2fc',
                    '200': '#bee4f9',
                    '300': '#84cef5',
                    '400': '#43b6ed',
                    DEFAULT: '#1a98d5',
                    '600': '#0e7dbb',
                    '700': '#0c6498',
                    '800': '#0e557e',
                    '900': '#124768',
                    '950': '#0c2d45',
                },
            },
        },
    },
    plugins: [],
};
export default config;
