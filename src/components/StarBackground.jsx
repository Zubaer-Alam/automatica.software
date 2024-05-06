import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Star = () => {
  const size = Math.random() * 2;
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const animationDelay = Math.random() * 10;

  return (
    <MotionBox
      position="absolute"
      bg="white"
      width={`${size}px`}
      height={`${size}px`}
      borderRadius="50%"
      top={`${top}%`}
      left={`${left}%`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: animationDelay, repeat: Infinity, repeatType: 'reverse' }}
    />
  );
};

export default function StarBackground() {
  const stars = Array.from({ length: 200 }, (_, index) => <Star key={index} />);

  return <>{stars}</>;
}