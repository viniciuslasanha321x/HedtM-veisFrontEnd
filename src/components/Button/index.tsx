// Modules
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ButtonComponent } from './styles';
// Animations
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

interface ButtonPropos {
  title: string;
  type?: string;
  color?: string;
  colorFont?: string;
  colorHover?: string;
}

const Button: React.FC<ButtonPropos> = ({
  children,
  title,
  color = '#8ba2b6',
  colorFont = '#fff',
  colorHover = '#758a9c',
}) => {
  return (
    <>
      <motion.div variants={fadeInUp}>
        <ButtonComponent
          color={color}
          colorFont={colorFont}
          colorHover={colorHover}
          type="submit"
        >
          <span>{title}</span>
        </ButtonComponent>
        {children}
      </motion.div>
    </>
  );
};

export default memo(Button);
