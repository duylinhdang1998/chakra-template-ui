import { PhoneIcon } from '@chakra-ui/icons';
import { Box, Center } from '@chakra-ui/react';
import React from 'react';

export default function CenterDemo() {
  return (
    <Box my="10px">
      <Center w="40px" h="40px" bg="tomato" color="white">
        <PhoneIcon />
      </Center>
    </Box>
  );
}
