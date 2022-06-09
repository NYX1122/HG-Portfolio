import React, { useRef, useEffect } from 'react';

import ParallaxLayer from '../components/ParallaxLayer';

import { Box, Typography, Input } from '@mui/material';

export default function ContactMe() {
  const textFieldData = ['Full Name', 'Email', 'Phone', 'Message'];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rose.main',
        py: '30px',
      }}
    >
      <Typography
        sx={{
          fontSize: 36,
          color: 'malachite.main',
          fontWeight: 'light',
          textShadow: '0 4px 4px #00000025',
          textAlign: 'center',
          mb: '30px',
        }}
      >
        Contact Me
      </Typography>
      <Box
        component='form'
        noValidate
        autoComplete='off'
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {textFieldData.map((item, index) => (
          <Input
            key={index}
            placeholder={item}
            multiline
            minRows={index === 3 ? 10 : 0}
            sx={{
              fontSize: 30,
              backgroundColor: 'white',
              color: 'malachite.main',
              borderRadius: '50px',
              boxShadow: '0 4px 4px #00000025',
              px: '20px',
              width: '80vw',
              my: '15px',
            }}
          ></Input>
        ))}
      </Box>
    </Box>
  );
}
