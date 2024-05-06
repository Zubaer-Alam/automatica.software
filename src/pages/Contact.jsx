import React from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, VStack, Button, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center" bg="black" color="white">
      <Box position="absolute" top={4} left={4}>
        <IconButton
          as={Link}
          to="/"
          icon={<ArrowBackIcon />}
          variant="ghost"
          color="white"
          _hover={{ color: 'gray.300' }}
          aria-label="Back"
        />
      </Box>
      <Box width={['90%', '60%']} borderRadius="md" p={8} bg="black" color="white" boxShadow="lg">
        <Heading as="h1" size={['2xl', '3xl']} mb={8} textAlign="center" fontWeight="bold" letterSpacing="wide">
          Contact Us
        </Heading>
        <VStack spacing={6} alignItems="center">
          <FormControl id="name" width={['100%', '70%']}>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Enter your name" focusBorderColor="white" borderColor="gray.600" />
          </FormControl>
          <FormControl id="email" width={['100%', '70%']}>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" focusBorderColor="white" borderColor="gray.600" />
          </FormControl>
          <FormControl id="message" width={['100%', '70%']}>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Enter your message" focusBorderColor="white" borderColor="gray.600" />
          </FormControl>
          <Button colorScheme="whiteAlpha" size="lg" fontWeight="bold" letterSpacing="wide" mt={8}>
            Submit
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}