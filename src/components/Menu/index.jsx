import React from 'react';

import { Box, Typography, Stack, Button } from '@mui/material';

import useWindowSize from '../../customHooks/useWindowSize';

import { motion } from 'framer-motion';

export default function Menu({
  setScrollToPieces,
  setScrollToAbout,
  setScrollToCommissions,
  setScrollToContact,
  activate,
  variants,
  toggleMenu,
}) {
  const { width } = useWindowSize();

  const scrollPiecesToggle = () => {
    toggleMenu();
    setScrollToPieces(true);
  };

  const scrollAboutToggle = () => {
    toggleMenu();
    setScrollToAbout(true);
  };

  const scrollCommissionsToggle = () => {
    toggleMenu();
    setScrollToCommissions(true);
  };

  const scrollContactToggle = () => {
    toggleMenu();
    setScrollToContact(true);
  };

  const buttonData = [
    { name: 'PIECES', onClick: scrollPiecesToggle },
    { name: 'ABOUT', onClick: scrollAboutToggle },
    { name: 'COMMISSIONS', onClick: scrollCommissionsToggle },
    { name: 'CONTACT', onClick: scrollContactToggle },
  ];

  return (
    <Box
      component={motion.div}
      animate={activate}
      initial={{ opacity: 0, y: -100 }}
      variants={variants}
      exit={{ opacity: 0, y: -100, transition: { duration: 0.35 } }}
      sx={{
        pt: '10px',
        pb: '20px',
        width: '58vw',
        backgroundColor: 'rose.main',
        borderRadius: '24px',
        zIndex: 16,
        position: 'fixed',
        top: '10vh',
        left: '21%',
      }}
    >
      <Stack spacing='23px' sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: { xs: '25px', sm: '30px' },
            color: 'malachite.main',
          }}
        >
          MENU
        </Typography>
        {buttonData.map((item, index) => (
          <Button
            sx={{
              px: '8px',
              height: '30px',
              backgroundColor: 'malachite.main',
              '&:hover': {
                color: 'malachite.main',
              },
              borderRadius: '24px',
              fontSize: { xs: '20px', sm: '25px' },
              color: 'rose.main',
              fontWeight: 'regular',
              variant: 'contained',
            }}
            onClick={item.onClick}
            key={index}
          >
            {item.name}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}
