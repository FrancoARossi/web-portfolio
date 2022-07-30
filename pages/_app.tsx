import React from 'react';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import '../i18n';
import MainLayout from '../components/layouts/MainLayout';

const MyApp: NextPage<AppProps> = ({ Component, pageProps, router }) => (
  <ChakraProvider theme={theme}>
    <MainLayout>
      <Component {...pageProps} key={router.route} />
    </MainLayout>
  </ChakraProvider>
);

export default MyApp;
