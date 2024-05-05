import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
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

export default function App() {
  const stars = Array.from({ length: 200 }, (_, index) => <Star key={index} />);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center" position="relative" bg="black" overflow="hidden">
      {stars}
      <Box textAlign="center" zIndex={1}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading as="h1" size="4xl" mb={4} color="white">
            automatica.software
          </Heading>
          <Text fontSize="xl" mb={8} color="white">
            Automating businesses with innovative software solutions
          </Text>
          {/* <Button colorScheme="blue" size="lg" onClick={onOpen}>
            Learn More
          </Button> */}
        </motion.div>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Us</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}