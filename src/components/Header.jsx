import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
      zIndex={"overlay"}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={20} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/video_hub/'}>Home</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/video_hub/videos'}>Videos</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/video_hub/free-videos'}>Free Videos</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/video_hub/upload'}>Upload Videos</Link>
              </Button>
            </VStack>
            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme="purple">
                <Link to={'/video_hub/login'}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={'outline'}
              >
                <Link to={'/video_hub/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
