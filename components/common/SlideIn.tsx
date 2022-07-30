import React from 'react';
import { motion } from 'framer-motion';

type SlideInProps = {
  children: React.ReactNode;
  delay?: number;
  rest?: object;
};

const SlideIn: React.ElementType<SlideInProps> = ({
  children,
  delay,
  ...rest
}) => (
  <motion.div
    initial={{ y: -40, opacity: 0 }}
    animate={{
      y: 0,
      transition: { duration: 0.5, delay: delay ?? 0 },
      opacity: 1,
    }}
    {...rest}
  >
    {children}
  </motion.div>
);

export default SlideIn;
