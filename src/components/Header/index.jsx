import React from 'react';

import { Typography, IconButton, Grid, Box } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function Header({ toggleMenu, width }) {
  const { scrollYProgress } = useViewportScroll();
  const scrollRange = [0.28, 0.4];
  const colorRange = ['#95ADB6', '#CBB3BF'];

  const backgroundColor = useTransform(
    scrollYProgress,
    scrollRange,
    colorRange
  );

  return (
    <Box
      component={motion.div}
      sx={{
        width: '100vw',
        position: 'fixed',
        top: 0,
        zIndex: 10,
        boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
      }}
      animate={{ scrollYProgress: 0.9 }}
      style={{ backgroundColor, scrollYProgress }}
    >
      <Grid
        container
        justifyContent='space-between'
        alignItems='center'
        sx={{ px: '15px' }}
      >
        <Grid item>
          <Typography
            sx={{ fontSize: { xs: '21px', sm: '30px' } }}
            variant='h5'
            color='malachite.main'
          >
            HG Art and Photography
          </Typography>
        </Grid>
        <Grid item>
          <IconButton
            sx={{ px: 0, height: { xs: '42px', sm: '55px' } }}
            onClick={toggleMenu}
          >
            <MenuIcon
              sx={{
                fontSize: { xs: '32px', sm: '55px' },
                color: 'malachite.main',
              }}
            ></MenuIcon>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
