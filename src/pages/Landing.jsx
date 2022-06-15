import React from 'react';

import LandingArrow from '../components/SVG/LandingArrow';

import { Typography, Box, Stack } from '@mui/material';

export default function Landing() {
  return (
    <Box
      sx={{
        backgroundImage: {
          xs: 'url(/art/girl_dog_sleepXS.jpg)',
          sm: 'url(/art/girl_dog_sleepSM.jpg)',
        },
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
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
            fontSize: { xs: '50px', sm: '70px' },
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
            fontSize: { xs: '35px', sm: '55px' },
          }}
        >
          My Work
        </Typography>
        <LandingArrow sx={{ textShadow: 'black 0 5px 5px' }}></LandingArrow>
      </Stack>
    </Box>
  );
}
