import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      html: {
        fontFamily: `'Sofia Pro', sans-serif`,
        '&::-webkit-scrollbar-track': {
          borderRadius: '10px',
          backgroundColor: '#e6e6e6',
        },
        '&::-webkit-scrollbar': {
          width: '8px',
          backgroundColor: '#F5F5F5',
        },
        '::-webkit-scrollbar-thumb': {
          borderRadius: '10px',
          backgroundColor: '#a3a3a3',
        },
      },
    },
  },
  sizes: {
    container: {
      '2xl': '100em',
      hero: '80em',
    },
  },
  shadows: {
    parallax: '0px -15px 10px 0 rgba(0,0,0,0.1);',
  },
  colors: {
    brandYellow: '#f5ec6d',
    brandOrange: '#ef8555',
    brandPink: '#be375f',
    brandMagenta: '#60246c',
  },
});

export default theme;
