import { Box } from '@chakra-ui/react';
import Banner from 'components/Banner/Banner';
import BlockCount from 'components/BlockCount/BlockCount';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Box minH="100vh" position="relative">
      <Header />
      <Banner />
      <Box h="100vh">
        <Outlet />
      </Box>
      <BlockCount />
      <Footer />
    </Box>
  );
}
