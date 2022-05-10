import { Box, Button, Flex, Link, Stack } from '@chakra-ui/react';
import LogoLuna from 'components/LogoLuna/LogoLuna';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
  return (
    <Flex justifyContent="space-between" alignItems="center" height="4rem" borderBottom="1px solid rgba(30, 41, 59, 0.8)">
      <Flex alignItems="center" height="100%">
        <Link as={RouterLink} to="/" px="8px" bgColor="rgb(109 40 217 / 0.25)" height="100%" display="flex" alignItems="center" justifyContent="center">
          <LogoLuna />
        </Link>
        <Stack spacing={2} direction="row" alignItems="center" fontWeight={600} fontSize="16px" height="100%">
          <Link
            as={RouterLink}
            px={5}
            to="/charts/tera/:id"
            _hover={{
              color: '#fff',
            }}>
            Swap
          </Link>
          <Link
            as={RouterLink}
            px={5}
            to="/tera/pairs"
            _hover={{
              color: '#fff',
            }}>
            Pairs
          </Link>
          <Link
            as={RouterLink}
            px={5}
            to="/tera/subscribe"
            _hover={{
              color: '#fff',
            }}>
            Subscribe
          </Link>
        </Stack>
      </Flex>
      <Box px={3}>
        <Button
          bgColor="rgba(109, 40, 217, 1)"
          color="#DED6FF"
          fontWeight="bold"
          fontSize="1.125rem"
          lineHeight="10.75rem"
          height="2.4rem"
          size="md"
          _hover={{
            color: '#fff',
            bgColor: 'rgba(109, 40, 217, 0.6)',
          }}>
          Connect Wallet
        </Button>
      </Box>
    </Flex>
  );
}
