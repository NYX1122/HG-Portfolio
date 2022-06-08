import React from 'react';

import { Box, Typography, Stack, Button } from '@mui/material';

import useWindowDimensions from '../../customHooks/useWindowDimensions';

import { motion } from 'framer-motion';

export default function Menu({ setScrollToPieces, setScrollToAbout }) {
  const { width } = useWindowDimensions();

  const scrollPiecesToggle = () => {
    setScrollToPieces(true);
  };

  const scrollAboutToggle = () => {
    setScrollToAbout(true);
  };

  return (
    <Box
      component={motion.div}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      initial={{ opacity: 0, y: -100 }}
      exit={{ opacity: 0, y: -100 }}
      sx={{
        width: 236,
        height: 235,
        backgroundColor: 'rose.main',
        borderRadius: '24px',
        zIndex: 12,
        position: 'fixed',
        top: '10vh',
        left: (width - 236) / 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'top',
      }}
    >
      <Stack spacing='23px' sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '30px',
            color: 'malachite.main',
            pt: '10px',
          }}
        >
          MENU
        </Typography>

        <Button
          sx={{
            px: '8px',
            height: '30px',
            backgroundColor: 'malachite.main',
            '&:hover': {
              color: 'malachite.main',
            },
            borderRadius: '24px',
            fontSize: '25px',
            color: 'rose.main',
            fontWeight: 'regular',
            variant: 'contained',
          }}
          onClick={scrollPiecesToggle}
        >
          PIECES
        </Button>

        <Button
          sx={{
            px: '8px',
            height: '30px',
            backgroundColor: 'malachite.main',
            '&:hover': {
              color: 'malachite.main',
            },
            borderRadius: '24px',
            fontSize: '25px',
            color: 'rose.main',
            fontWeight: 'regular',
          }}
          onClick={scrollAboutToggle}
        >
          ABOUT ME
        </Button>

        <Button
          sx={{
            px: '8px',
            height: '30px',
            backgroundColor: 'malachite.main',
            '&:hover': {
              color: 'malachite.main',
            },
            borderRadius: '24px',
            fontSize: '25px',
            color: 'rose.main',
            fontWeight: 'regular',
          }}
        >
          COMMISSIONS
        </Button>
      </Stack>
    </Box>
  );
}
