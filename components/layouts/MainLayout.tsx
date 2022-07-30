// libs
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { Box, useColorModeValue } from '@chakra-ui/react';
// components
import NavBar from '../NavBar';

const MainLayout: React.FC<{ children: ReactElement }> = ({ children }) => (
  <Box
    as="main"
    height="100vh"
    bgColor={useColorModeValue('gray.50', 'gray.900')}
  >
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Franco&apos;s Portfolio 👨‍💻</title>
    </Head>
    <NavBar />
    {children}
  </Box>
);

export default MainLayout;
