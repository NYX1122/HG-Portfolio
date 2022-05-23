import React from 'react';

import { Box, Typography, Stack, Button } from '@mui/material';

import useWindowDimensions from '../../customHooks/useWindowDimensions';

export default function Menu() {
  const { width } = useWindowDimensions();

  return (
    <Box
      sx={{
        width: 236,
        height: 252,
        backgroundColor: 'rose.main',
        borderRadius: '24px',
        zIndex: 12,
        position: 'fixed',
        mb: '200px',
        top: '10vh',
        left: (width - 236) / 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack spacing='23px' sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '30px',
            color: 'malachite.main',
            marginTop: '8px',
          }}
        >
          MENU
        </Typography>
        <Box
          sx={{
            width: 95,
            height: 32,
            background:
              'linear-gradient(to bottom right, #FBFE5C, #FC6BFF, #FFFFFF)',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 91,
              height: 28,
              backgroundColor: 'rose.main',
              borderRadius: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              sx={{
                fontSize: '25px',
                padding: 0,
                height: '25px',
                color: 'malachite.main',
                fontWeight: 'lighter',
              }}
            >
              PIECES
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: 140,
            height: 32,
            background:
              'linear-gradient(to bottom right, #FBFE5C, #FC6BFF, #FFFFFF)',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 136,
              height: 28,
              backgroundColor: 'rose.main',
              borderRadius: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              sx={{
                fontSize: '25px',
                padding: 0,
                height: '25px',
                color: 'malachite.main',
                fontWeight: 'lighter',
              }}
            >
              ABOUT ME
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: 182,
            height: 32,
            background:
              'linear-gradient(to bottom right, #FBFE5C, #FC6BFF, #FFFFFF)',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 178,
              height: 28,
              backgroundColor: 'rose.main',
              borderRadius: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              sx={{
                fontSize: '25px',
                padding: 0,
                height: '25px',
                color: 'malachite.main',
                fontWeight: 'lighter',
              }}
            >
              COMMISSIONS
            </Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
