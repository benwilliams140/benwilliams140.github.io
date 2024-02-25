import { defineConfig } from 'unocss';
// import presetUno from '@unocss/preset-uno';
// import presetAttributify from '@unocss/preset-attributify';
// import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx';

export default defineConfig({
  // presets: [presetAttributify(), presetUno()],
  // transformers: [transformerAttributifyJsx()],
  preflights: [
    {
      getCSS() {
        return `#root {
          --z-index-about-background: 10;
          --z-index-about-content: 11;
          --z-index-sidebar: 50;
          --z-index-sidebar-hamburger: 51;
          width: 100vw;
          height: 100vh;
          font-family: sans-serif;
        } 
        body {
          margin: 0;
          overflow: hidden;
        }`;
      },
    },
  ],
  theme: {
    colors: {
      panel: '#EAEAEA',
      primary: '#CBC5EA',
      'primary-90': '#CBC5EAE6',
      'primary-50': '#CBC5EA80',
      'primary-30': '#CBC5EA4D',
      'primary-10': '#CBC5EA1A',
      active: '#73628A',
      'active-90': '#73628AE6',
      'active-50': '#73628A80',
      'active-30': '#73628A4D',
      'active-10': '#73628A1A',
      secondary: '#313D5A',
      'secondary-90': '#313D5AE6',
      'secondary-50': '#313D5A80',
      'secondary-30': '#313D5A4D',
      'secondary-10': '#313D5A1A',
      border: '#183642',
    },
    breakpoints: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  rules: [],
  shortcuts: {
    overlay:
      'before:(content-empty w-inherit h-inherit absolute top-0 left-0 border-rd-inherit z--1)',
    'hover:overlay': 'overlay hover:before:(bg-active-50)',
    'active:overlay': 'overlay active:before:(bg-active-30)',
    'hover:active:overlay': 'overlay hover:overlay active:overlay',
    page: 'w-full h-full box-border relative',
    panel: 'w-full h-full bg-panel box-border',
    hamburger: 'flex flex-col gap-1 m-auto w-12 z-$z-index-sidebar-hamburger',
    'hamburger-patty':
      'h-2 bg-active border-rounded w-full transition-transform transition-opacity group-hover:scale-90',
    'sidebar-item':
      'relative w-full h-12 border-b-solid border-b-1px border-border hover:active:overlay',
    'sidebar-item-label':
      'w-full h-full text-secondary text-xl text-center content-center line-height-48px',
  },
});
