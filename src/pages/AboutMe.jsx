import React from 'react';

import GradientLine from '../components/SVG/GradientLine';

import { Box, Typography } from '@mui/material';

export default function AboutMe() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{
        width: 290,
        height: 419,
        background: 'linear-gradient(to bottom right, #FBFE5C, #FC6BFF, #FFFFFF)',
        borderRadius: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '8px'
    }}>
        <Box sx={{
            backgroundImage: 'url(/art/self_portrait_hailey.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: 286,
            height: 415,
            borderRadius: '24px'
        }}>
        </Box>
    </Box>
    <Typography sx={{ 
      fontSize: 32, 
      color: 'malachite.main', 
      fontWeight: 'lighter', 
      textShadow: '0 3px 4px', 
      textAlign: 'center', 
      marginBottom: '10px' 
    }}>
      About Me
    </Typography>
    <GradientLine style={{ marginBottom: '10px' }}></GradientLine>
    <Typography sx={{ 
      fontSize: '19px', 
      color: 'malachite.main', 
      fontWeight: 'lighter',
      textAlign: 'center',
      paddingX: '17px'
    }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore.
    </Typography>
  </Box>
  );
}