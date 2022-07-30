import React from 'react';
import { Box } from '@chakra-ui/react';

type CardProps = {
  children: React.ReactNode;
  padding?: string;
  props?: object;
};

const Card: React.FC<CardProps> = ({ children, padding, ...props }) => (
  <Box bgColor="white" boxShadow="md" borderRadius="8px" {...props}>
    {children}
  </Box>
);

export default Card;
