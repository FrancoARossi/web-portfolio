// libs
import React from 'react';
import { Box, Flex, Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';
// components
import SlideIn from './common/SlideIn';
import styles from '../styles/Hero.module.css';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Stack
      h="100vh"
      direction={['column', 'row']}
      justifyContent="center"
      transition="all 300ms"
    >
      <Stack direction="column" justifyContent="center" w="100%" gap=".5em">
        <SlideIn delay={0.6}>
          <Heading
            as="h2"
            size="xl"
            fontWeight="thin"
            textAlign={['center', 'left']}
            cursor="default"
            transition="all 300ms"
          >
            {t('hero.title')}
          </Heading>
        </SlideIn>
        <SlideIn delay={0.7}>
          <Heading
            as="h1"
            size={['3xl', null, '4xl']}
            fontWeight="bold"
            color={useColorModeValue('brandMagenta', 'brandYellow')}
            textAlign={['center', 'left']}
            cursor="default"
            transition="all 300ms"
            marginLeft="-5px"
          >
            Franco Rossi
          </Heading>
        </SlideIn>
        <SlideIn delay={0.7}>
          <Box textAlign={['center', 'left']}>
            <Typewriter
              options={{
                strings: [
                  t('hero.reactDev'),
                  t('hero.petLover'),
                  t('hero.engineer'),
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 20,
                delay: 50,
                wrapperClassName: styles.typewritter__wrapper,
                cursorClassName: styles.typewritter__cursor,
              }}
            />
          </Box>
        </SlideIn>
      </Stack>
      <Flex
        alignItems="center"
        justifyContent={['center', 'center', 'right']}
        w="100%"
        transition="all 300ms"
      >
        Placeholder for 3d model
      </Flex>
    </Stack>
  );
};

export default HeroSection;
