import React from 'react';

import { Typography, Box, Button } from '@mui/material';

import useWindowSize from '../../customHooks/useWindowSize';

export default function Header({
  setScrollToPieces,
  setScrollToAbout,
  setScrollToCommissions,
  setScrollToContact,
}) {
  const data = ['Pieces', 'About', 'Commissions', 'Contact'];
  const scrollPiecesToggle = () => {
    setScrollToPieces(true);
  };
  const scrollAboutToggle = () => {
    setScrollToAbout(true);
  };
  const scrollCommissionsToggle = () => {
    setScrollToCommissions(true);
  };
  const scrollContactToggle = () => {
    setScrollToContact(true);
  };

  const { width } = useWindowSize();
  return (
    <Box
      sx={{
        width: '100vw',
        position: 'relative',
        backgroundColor: 'rose.main',
        top: 0,
        zIndex: 1,
        boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: { md: '20vw', xl: '11vw' },
          }}
        >
          <Typography
            sx={{
              fontSize: '90px',
              fontWeight: 'light',
              color: 'malachite.main',
            }}
          >
            H
          </Typography>
          <Typography
            sx={{
              fontSize: '90px',
              fontWeight: 'light',
              color: 'malachite.main',
            }}
          >
            G
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: { md: '100vw', xl: '80vw' },
            pb: { lg: '.5vw' },
          }}
        >
          {data.map((item, index) => (
            <Button
              variant='text'
              key={index}
              sx={{
                fontSize: '30px',
                color: 'white',
                fontWeight: 'light',
                textShadow: '0 4px 4px #00000025',
                textTransform: 'none',
              }}
              onClick={
                item === 'Pieces'
                  ? scrollPiecesToggle
                  : item === 'About'
                  ? scrollAboutToggle
                  : item === 'Commissions'
                  ? scrollCommissionsToggle
                  : scrollContactToggle
              }
            >
              {item}
            </Button>
          ))}
        </Box>
        {width < 1200 && (
          <Typography
            sx={{
              textAlign: 'left',
              width: '100vw',
              fontSize: '40px',
              fontWeight: 'light',
              color: 'white',
              ml: '40px',
              mb: '15px',
              textShadow: '0 4px 4px #00000025',
            }}
          >
            Welcome.
          </Typography>
        )}
      </Box>
    </Box>
  );
}
