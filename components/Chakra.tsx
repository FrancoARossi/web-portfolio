import React from 'react';
import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react';
import theme from '../theme';

type ChakraProps = {
  children: React.ReactNode;
  cookies: any;
};

export const Chakra: React.FC<ChakraProps> = ({ cookies, children }) => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      {children}
    </ChakraProvider>
  );
};

// @ts-ignore
export const getServerSideProps = ({ req }) => ({
  props: {
    cookies: req.headers.cookie ?? '',
  },
});
