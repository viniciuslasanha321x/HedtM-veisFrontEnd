import React from 'react';
import { motion } from 'framer-motion';
import { LogoComponent } from './styles';

const easing = [0.6, -0.5, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

interface LogoProps {
  image: string;
  altImage: string;
  color?: string;
  colorMedia?: string;
}

export const Logo: React.FC<LogoProps> = ({
  image,
  altImage,
  color = '',
  colorMedia = '',
}) => {
  return (
    <LogoComponent color={color} colorMedia={colorMedia}>
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <img src={image} alt={altImage} />
      </motion.div>
    </LogoComponent>
  );
};
