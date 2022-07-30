// libs
import React from 'react';
import { Stack, Box, Container, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
// components
import LinkItem from './common/LinkItem';

type NavBarProps = {
  rest?: object;
};

const NavBar: React.FC<NavBarProps> = ({ ...rest }) => {
  const { t } = useTranslation();

  return (
    <Box
      as="header"
      width="100%"
      padding="1em 2em"
      backdropFilter="auto"
      backdropBlur="5px"
      zIndex="10"
      position="fixed"
      {...rest}
    >
      <Container
        maxW={{ md: 'container.xl', lg: 'container.2xl' }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingTop="1em"
      >
        <LinkItem
          as="h1"
          href="#hero"
          color={useColorModeValue('brandMagenta', 'brandYellow')}
          padding="0"
          transitionDelay={0.1}
        >
          &lt;FrancoRossi &frasl;&gt;
        </LinkItem>
        <Stack as="nav" direction="row" display={['none', 'flex']}>
          <LinkItem href="#about" transitionDelay={0.2}>
            {t('navBar.about')}
          </LinkItem>
          <LinkItem href="#projects" transitionDelay={0.3}>
            {t('navBar.projects')}
          </LinkItem>
          <LinkItem href="#contact" transitionDelay={0.4}>
            {t('navBar.contact')}
          </LinkItem>
        </Stack>
        <HamburgerIcon display={['block', 'none']} />
      </Container>
    </Box>
  );
};

export default NavBar;
