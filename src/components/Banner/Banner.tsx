import { Box, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const images = [
  'https://coinhall.org/assets/campaign/orion/orion-desktop.jpg',
  'https://coinhall.org/assets/campaign/prism/prism-desktop.png',
  'https://coinhall.org/assets/campaign/talis/talis-desktop.png',
];

export default function Banner() {
  const [url, setUrl] = useState(images[0]);
  useEffect(() => {
    let num = 0;
    const interval = setInterval(() => {
      num = num + 1;
      if (num > 2) {
        num = 0;
      }
      setUrl(images[num]);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Box height="100%">
      <Image src={url} />
    </Box>
  );
}
