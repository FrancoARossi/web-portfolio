import React from 'react';
import { Box, Container, useColorModeValue } from '@chakra-ui/react';

type GenericLayoutProps = {
  children: React.ReactNode;
  id: string;
  bgColor?: string;
  maxW?: string | [string] | object;
};

const GenericLayout: React.FC<GenericLayoutProps> = ({
  children,
  id,
  bgColor,
  maxW,
}) => {
  const colorModeValue = useColorModeValue('gray.50', 'gray.900');

  return (
    <>
      <Box
        as="section"
        bgColor={bgColor ?? colorModeValue}
        boxShadow="parallax"
        alignItems="center"
        h="100%"
        paddingY="56px"
        id={id}
      >
        <Container maxW={maxW ?? 'container.2xl'}>{children}</Container>
      </Box>
    </>
  );
};

export default GenericLayout;
