import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { EmailIcon } from '@chakra-ui/icons';

export default function Navbar() {
  return (
    <Box position="absolute" top={4} right={4} zIndex={1}>
      <IconButton
        as={Link}
        to="/contact"
        aria-label="Contact"
        icon={<EmailIcon />}
        colorScheme="whiteAlpha"
        variant="ghost"
        size="lg"
      />
    </Box>
  );
}