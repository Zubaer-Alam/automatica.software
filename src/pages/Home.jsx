import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import StarBackground from '../components/StarBackground';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center" position="relative" bg="black" overflow="hidden">
      <StarBackground />
      <Header />
      <Navbar />
    </Box>
  );
}