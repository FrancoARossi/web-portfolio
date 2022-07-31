import React from 'react';
import { Box, Container, useColorModeValue } from '@chakra-ui/react';

type GenericLayoutProps = {
  children: React.ReactNode;
  id: string;
  bgColor?: string;
};

const GenericLayout: React.FC<GenericLayoutProps> = ({
  children,
  id,
  bgColor,
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
        <Container
          maxW={[
            'container.sm',
            null,
            null,
            'container.md',
            'container.xl',
            'container.2xl',
          ]}
        >
          {children}
        </Container>
      </Box>
    </>
  );
};

export default GenericLayout;
