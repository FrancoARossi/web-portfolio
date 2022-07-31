// libs
import React from 'react';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import '../i18n';
// components
import MainLayout from '../components/layouts/MainLayout';
import { Chakra } from '../components/Chakra';

const MyApp: NextPage<AppProps> = ({ Component, pageProps, router }) => (
  <Chakra cookies={pageProps.cookies}>
    <MainLayout>
      <Component {...pageProps} key={router.route} />
    </MainLayout>
  </Chakra>
);

export { getServerSideProps } from '../components/Chakra';

export default MyApp;
