// libs
import React from 'react';
import { useViewportScroll, motion, useTransform } from 'framer-motion';
import { useColorModeValue } from '@chakra-ui/react';
// components
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import GenericLayout from '../components/layouts/GenericLayout';

const Home: React.FC = () => {
  const { scrollY } = useViewportScroll();
  const yParallax = useTransform(scrollY, [0, 300], [0, -200]);

  const mappedBlurValue = useTransform(scrollY, [0, 300], [0, 4]);
  const blurFilter = useTransform(mappedBlurValue, v => `blur(${v}px)`);

  return (
    <>
      <motion.div style={{ filter: blurFilter }}>
        <GenericLayout
          id="hero"
          bgColor={useColorModeValue('brandYellow', 'brandMagenta')}
          maxW={[
            'container.sm',
            null,
            null,
            'container.md',
            'container.xl',
            'container.2xl',
          ]}
        >
          <HeroSection />
        </GenericLayout>
      </motion.div>
      <motion.div
        style={{
          y: yParallax,
          marginTop: '1em',
          position: 'relative',
        }}
      >
        <GenericLayout id="about">
          <AboutSection />
        </GenericLayout>
      </motion.div>
    </>
  );
};

export default Home;
