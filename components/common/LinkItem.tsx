import React, { useCallback } from 'react';
import { Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type LinkItemProps = {
  href: string;
  children: React.ReactNode;
  transitionDelay?: number;
  headingProp?: object;
};

const LinkItem: React.FC<LinkItemProps> = ({
  href,
  children,
  transitionDelay,
  ...headingProps
}) => {
  const shouldScroll = href[0] === '#';

  const onClickScrollSmooth = useCallback(() => {
    document.getElementById(href.substring(1))?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [href]);

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{
        y: 0,
        transition: { duration: 0.5, delay: transitionDelay ?? 0 },
        opacity: 1,
      }}
      whileHover={{
        scale: 1.1,
        textShadow: '5px 10px 15px rgba(0, 0, 0, 0.3)',
        cursor: 'pointer',
      }}
      whileTap={{ scale: 0.9 }}
    >
      {shouldScroll ? (
        <Heading
          as="h2"
          fontWeight="bold"
          fontSize="2xl"
          padding="0 .5em"
          onClick={onClickScrollSmooth}
          {...headingProps}
        >
          {children}
        </Heading>
      ) : (
        <Link href={href}>
          <Heading
            as="h2"
            fontWeight="bold"
            size="md"
            padding=".5em 1em"
            {...headingProps}
          >
            {children}
          </Heading>
        </Link>
      )}
    </motion.div>
  );
};

export default LinkItem;
