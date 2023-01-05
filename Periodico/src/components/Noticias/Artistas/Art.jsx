import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react'

export default function Art() {
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        margin={"4px"}
        // color="white"
        // backgroundColor={"white"}
      >
        <Image
          src="gibbresh.png"
          fallbackSrc="https://via.placeholder.com/150"
        />

        <Image
          src="gibbresh.png"
          fallbackSrc="https://via.placeholder.com/150"
        />

        <Box>
          
          <Image
            src="gibbresh.png"
            fallbackSrc="https://via.placeholder.com/150"
          />
        </Box>
      </SimpleGrid>
    </>
  );
}
