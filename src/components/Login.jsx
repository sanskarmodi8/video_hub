import { VStack, Container, Heading, Input, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={["full",'96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome Back</Heading>
          <Input
            placeholder="Email"
            type="email"
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Password"
            type="password"
            required
            focusBorderColor="purple.500"
          />
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/video_hub/forgot-password'}>Forgot Password?</Link>
          </Button>
          <Button colorScheme="purple" type="submit">
            Login
          </Button>
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/video_hub/signup'}>Signup</Link>
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
