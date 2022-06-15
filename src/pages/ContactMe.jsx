import React, { useRef, useEffect } from 'react';

import { Box, Typography, TextField } from '@mui/material';

import { motion } from 'framer-motion';

export default function ContactMe({ scrollToContact, setScrollToContact }) {
  //Map data
  const textFieldData = ['Full Name', 'Email', 'Phone', 'Message'];

  //Autoscroll effect
  const ref = useRef(null);
  useEffect(() => {
    if (scrollToContact) {
      const { top } = ref.current.getBoundingClientRect();
      window.scrollBy({ top: top, left: 0, behavior: 'smooth' });
      setScrollToContact(false);
    }
  }, [scrollToContact, setScrollToContact]);

  //Animation Variables
  const variants = {
    inputAnim: (i) => ({
      scaleX: 1,
      transition: {
        delay: i * 0.25,
      },
    }),
    inputStart: { scaleX: 0 },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rose.main',
        pt: '70px',
        pb: '10px',
      }}
      ref={ref}
    >
      <Typography
        component={motion.p}
        sx={{
          fontSize: { xs: '30px' },
          color: 'malachite.main',
          fontWeight: 'light',
          textShadow: '0 4px 4px #00000025',
          textAlign: 'center',
          mb: '15px',
        }}
        viewport={{ once: false, margin: '2000px 0px 0px 0px' }}
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ delay: 0.1 }}
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
          <TextField
            component={motion.div}
            key={index}
            placeholder={item}
            multiline
            variant='standard'
            InputProps={{
              disableUnderline: true,
              sx: { fontSize: '25px', color: 'malachite.main' },
            }}
            minRows={index === 3 ? 8 : 0}
            sx={{
              backgroundColor: 'white',
              borderRadius: '50px',
              boxShadow: '0 4px 4px #00000025',
              px: '20px',
              width: '80vw',
              my: '15px',
            }}
            custom={index + 1}
            initial='inputStart'
            whileInView='inputAnim'
            variants={variants}
          ></TextField>
        ))}
      </Box>
    </Box>
  );
}
