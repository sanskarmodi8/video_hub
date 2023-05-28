import { Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';

const Forgotpassword = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <Heading>Sorry, we cant recover your password!</Heading>
      </VStack>
    </Container>
  );
};

export default Forgotpassword;
