import React from 'react';

import LandingArrow from '../components/SVG/LandingArrow';

import { Typography, Box, Stack } from '@mui/material';

export default function Landing() {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/art/girl_dog_sleep.jpg)',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        zIndex: '1',
      }}
    >
      <Stack justifyContent='center' alignItems='center' spacing={8}>
        <Typography
          variant='h2'
          sx={{
            color: 'white',
            textShadow: 'black 0 5px 5px',
            fontWeight: 200,
            marginTop: '25vh',
            marginBottom: '10vh',
          }}
        >
          Welcome.
        </Typography>
        <Typography
          variant='h3'
          sx={{
            color: 'white',
            textShadow: 'black 0 5px 5px',
            fontWeight: 200,
          }}
        >
          My Work
        </Typography>
        <LandingArrow sx={{ textShadow: 'black 0 5px 5px' }}></LandingArrow>
      </Stack>
    </Box>
  );
}
