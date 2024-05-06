import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <Box textAlign="center" zIndex={1}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading as="h1" size={['3xl', '4xl']} mb={4} color="white">
          automatica.software
        </Heading>
        <Text fontSize={['lg', 'xl']} mb={8} color="white">
          Automating businesses with innovative software solutions
        </Text>
      </motion.div>
    </Box>
  );
}