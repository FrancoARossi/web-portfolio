import React from 'react';
import { Flex, Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import SlideIn from './common/SlideIn';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Stack h="100vh" direction={['column', 'row']} justifyContent="center">
      <Stack direction="column" justifyContent="center" w="100%">
        <SlideIn delay={0.5}>
          <Heading
            as="h2"
            size="xl"
            fontWeight="thin"
            margin="0"
            textAlign={['center', 'left']}
            cursor="default"
          >
            {t('hero.title')}
          </Heading>
        </SlideIn>
        <SlideIn delay={0.6}>
          <Heading
            as="h1"
            size={['3xl', null, '4xl']}
            fontWeight="bold"
            margin="0"
            color={useColorModeValue('brandMagenta', 'brandYellow')}
            textAlign={['center', 'left']}
            cursor="default"
          >
            Franco Rossi
          </Heading>
        </SlideIn>
        <SlideIn delay={0.7}>
          <Heading
            as="h2"
            fontWeight="thin"
            size="xl"
            textAlign={['center', 'left']}
            cursor="default"
          >
            {t('hero.subtitle')}
          </Heading>
        </SlideIn>
      </Stack>
      <Flex
        alignItems="center"
        justifyContent={['center', 'center', 'right']}
        w="100%"
      >
        Placeholder for 3d model
      </Flex>
    </Stack>
  );
};

export default HeroSection;
