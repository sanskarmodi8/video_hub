import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const videosArr = [
  [
    'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
    'Lecture 1',
  ],
  [
    'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
    'Lecture 2',
  ],
  [
    'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
    'Lecture 3',
  ],
  [
    'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
    'Lecture 4',
  ],
  [
    'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
    'Lecture 5',
  ],
  [
    'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
    'Lecture 6',
  ],
  [
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
    'Lecture 7',
  ],
];
const Video = () => {
  const [videoSrc, setVideoSrc] = useState(videosArr[0][0]);
  return (
    <Stack direction={['column', 'row']} h={'fit-content'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{ width: '100%' }}
        ></video>
        <VStack
          alignItems={'flex-start'}
          p={'8'}
          width={'full'}
          overflowY={'auto'}
        >
          <Heading id="heading"> {videosArr[0][1]}</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        padding={'20'}
        spacing={'8'}
        
      >
        {videosArr.map((item, index) => (
          <Button
            variant={'outline'}
            colorScheme="purple"
            onClick={() => {
              setVideoSrc(item[0]);
              document.getElementById('heading').innerText =
                videosArr[index][1];
            }}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Video;
