import React from 'react';

import { Box } from '@mui/material';

import { motion } from 'framer-motion';

export default function PieceItem({ imgName, identifier }) {
  const isEven = identifier % 2 === 0 ? true : false;

  return (
    <Box
      component={motion.div}
      sx={{
        backgroundImage: `url(/art/${imgName}.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: 338,
        height: 186.5,
        borderRadius: '24px',
        borderWidth: '3px',
        borderStyle: 'solid',
        borderColor: 'malachite.main',
        my: '8px',
      }}
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: '-280px 0px -93.25px 0px' }}
      transition={{ duration: 0.5 }}
    ></Box>
  );
}
