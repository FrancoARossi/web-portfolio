// libs
import React from 'react';
import { Center, Divider, Stack, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import AboutCard from './common/AboutCard';

const AboutSection = () => {
  const { t } = useTranslation();
  const cardsTitles = [t('about.locationTitle'), t('about.hobbiesTitle')];

  return (
    <Stack direction={['column', 'row']} h="80vh">
      <Center w="50%">Placeholder for image of myself</Center>
      <Divider
        orientation="vertical"
        h="80%"
        alignSelf="center"
        borderColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.300')}
      />
      <Stack
        w="100%"
        direction="column"
        justifyContent="center"
        paddingX="4em"
        gap="1em"
      >
        {cardsTitles.map(title => (
          <AboutCard content={title} key={title} />
        ))}
      </Stack>
    </Stack>
  );
};

export default AboutSection;
