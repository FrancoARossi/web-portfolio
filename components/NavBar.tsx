// libs
import React from 'react';
import {
  Stack,
  Box,
  Container,
  useColorModeValue,
  useColorMode,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import { BsFillSunFill as Sun, BsFillMoonFill as Moon } from 'react-icons/bs';
// components
import LinkItem from './common/LinkItem';
import SlideIn from './common/SlideIn';
import i18n from '../i18n';

type NavBarProps = {
  rest?: object;
};

const NavBar: React.FC<NavBarProps> = ({ ...rest }) => {
  const { t } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();

  const changeLanguage = () =>
    i18n.language === 'en'
      ? i18n.changeLanguage('es')
      : i18n.changeLanguage('en');

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
          href="#hero"
          color={useColorModeValue('brandMagenta', 'brandYellow')}
          padding="0"
          transitionDelay={0.1}
        >
          &lt;FrancoRossi &frasl;&gt;
        </LinkItem>
        <Stack
          as="nav"
          direction="row"
          display={['none', 'flex']}
          alignItems="center"
        >
          <Button onClick={changeLanguage} bgColor="transparent">
            {i18n.language === 'en' ? (
              <SlideIn delay={0.2}>ES</SlideIn>
            ) : (
              <SlideIn delay={0.2}>EN</SlideIn>
            )}
          </Button>
          <Button onClick={toggleColorMode} bgColor="transparent">
            {colorMode === 'light' ? (
              <SlideIn delay={0.3}>
                <Moon fontSize="1.5rem" />
              </SlideIn>
            ) : (
              <SlideIn delay={0.3}>
                <Sun fontSize="1.5rem" />
              </SlideIn>
            )}
          </Button>
          <LinkItem href="#about" transitionDelay={0.4}>
            {t('navBar.about')}
          </LinkItem>
          <LinkItem href="#work" transitionDelay={0.5}>
            {t('navBar.work')}
          </LinkItem>
          <LinkItem href="#contact" transitionDelay={0.6}>
            {t('navBar.contact')}
          </LinkItem>
        </Stack>
        <HamburgerIcon display={['block', 'none']} />
      </Container>
    </Box>
  );
};

export default NavBar;
