import { Box, VStack, Heading, Text, Input, Button, Textarea } from '@chakra-ui/react';
import { FaEnvelope, FaUserGraduate, FaInfoCircle } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={8} p={5}>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Biography <FaInfoCircle /></Heading>
        <Text mt={4}>James Garfield was the 20th President of the United States. He served from March 4, 1881, until his assassination later that year.</Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Achievements <FaUserGraduate /></Heading>
        <Text mt={4}>Garfield was instrumental in the Civil Rights Movement, advocating for universal education and voting rights for all American citizens.</Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Contact <FaEnvelope /></Heading>
        <VStack spacing={3} mt={4}>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button colorScheme="blue">Send Message</Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Index;