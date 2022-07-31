import React from 'react';
import { Flex, Heading, useColorModeValue, useToken } from '@chakra-ui/react';

type CardProps = {
  content: string;
  padding?: string;
  props?: object;
};

const AboutCard: React.FC<CardProps> = ({ content, padding, ...props }) => {
  const bgColor = useToken(
    'colors',
    useColorModeValue('brandYellow', 'brandMagenta')
  );
  const hoverBgColor = useToken(
    'colors',
    useColorModeValue('brandOrange', 'brandPink')
  );

  return (
    <Flex
      boxShadow="md"
      borderRadius="8px"
      maxWidth="30em"
      height="4rem"
      alignItems="center"
      paddingX="1em"
      cursor="pointer"
      css={{
        // Using a gradient as backgroundImage and then moving it with backgroundPosition on hover.
        // Also scaling it up, so it covers the whole card.
        transition: 'background-position 800ms',
        backgroundImage: `linear-gradient(to left,  ${hoverBgColor} 50%, ${bgColor} 0)`,
        backgroundSize: '200% 200%',
        backgroundPosition: 'left',
        ':hover': {
          backgroundPosition: 'right',
        },
      }}
      {...props}
    >
      <Heading
        as="h3"
        fontSize={['md', 'xl', '3xl']}
        fontWeight="bold"
        whiteSpace="nowrap"
        transition="all 300ms"
      >
        {content}
      </Heading>
    </Flex>
  );
};

export default AboutCard;
