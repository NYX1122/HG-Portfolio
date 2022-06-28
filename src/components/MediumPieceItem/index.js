import React from 'react';

import { Box } from '@mui/material';

export default function MediumPieceItem({ item }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(/artMedium/${item.name}.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundClip: 'unset',
        width: `${item.width}vw`,
        height: `${item.height}vw`,
      }}
    ></Box>
  );
}
