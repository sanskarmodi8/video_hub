import { Box, Container, Stack } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.png';
import { Image } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '2',
  size: ['sm', '4xl'],
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img4} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
            Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
            velit culpa maiores. Inventore esse illum excepturi dolores est
            natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
            adipisci minima hic, nam provident quo aperiam quasi vel?
            Dignissimos accusantium aliquid aut vel explicabo voluptatum
            molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
            omnis officiis autem dolorum!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={['50vh', '100vh']}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w={'full'} h={['50vh', '100vh']}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} >
        Future Is Gaming
      </Heading>
    </Box>
    <Box w={'full'} h={['50vh', '100vh']}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} top={"40%"}>
        Gaming On Console
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
