import React from 'react';

import DarkCircleOverlay from '../DarkCircleOverlay';

import { Box, Typography, Stack, Button } from '@mui/material';

import { motion } from 'framer-motion';

export default function FormModal({
  modal,
  toggleModal,
  errorType,
  allowScroll,
}) {
  const modalVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    close: {
      opacity: 0,
      y: 500,
    },
  };

  const circleVariants = {
    open: {
      scale: 200,
      opacity: 0.6,
      transition: { duration: 0.35 },
    },
    close: {
      scale: 0,
      transition: { duration: 0.35 },
      opacity: 0,
    },
  };

  const toggle = () => {
    allowScroll();
    toggleModal('close');
  };

  return (
    <Box sx={{ position: 'fixed', zIndex: 16, top: '44.5vh', left: '21%' }}>
      <Box
        component={motion.div}
        sx={{
          pt: '10px',
          pb: '20px',
          width: '58vw',
          backgroundColor: 'rose.main',
          borderRadius: '24px',
          zIndex: 16,
          position: 'fixed',
          top: '44.5vh',
          left: '21%',
        }}
        initial='close'
        animate={modal}
        variants={modalVariants}
      >
        <Stack
          spacing='15px'
          sx={{ display: 'flex', alignItems: 'center', px: '10px' }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { xs: '25px', sm: '30px' },
              color: 'malachite.main',
            }}
          >
            {errorType ? 'ERROR!' : 'SUCCESS!'}
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { xs: '20px', sm: '35px' },
              color: 'malachite.main',
              pb: '8px',
            }}
          >
            {errorType === 'validationName'
              ? 'Name validation failed! Please make sure to include both your first and last names.'
              : errorType === 'validationEmail'
              ? 'Email validation failed! Please make sure to use a proper email address that includes an "@" sign.'
              : errorType === 'validationPhone'
              ? 'Phone validation failed! Please make sure to enter your phone number in the following formats - (000) 000-0000, 000-000-0000, 000 000-0000, 0000000000'
              : errorType === 'connection'
              ? 'Failed to connect to server. Please try again later.'
              : 'Message successfully sent.'}
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
              fontSize: { xs: '20px', sm: '25px' },
              color: 'rose.main',
              fontWeight: 'regular',
              variant: 'contained',
            }}
            onClick={toggle}
          >
            Understood
          </Button>
        </Stack>
      </Box>
      <DarkCircleOverlay
        width='10px'
        height='10px'
        background='#000'
        borderRadius='100px'
        top='65vh'
        left='50%'
        zIndex='15'
        position='fixed'
        initial='close'
        activate={modal}
        variants={circleVariants}
        toggle={toggle}
      ></DarkCircleOverlay>
    </Box>
  );
}
