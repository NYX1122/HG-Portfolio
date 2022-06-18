import React, { useRef, useEffect, useState } from 'react';

import DarkCircleOverlay from '../DarkCircleOverlay';

import { Box } from '@mui/material';

import { motion, useCycle } from 'framer-motion';

import useWindowSize from '../../customHooks/useWindowSize';
import { useScrollBlock } from '../../customHooks/useScrollBlock';

export default function PieceItem({ imgName, identifier }) {
  const { width, height } = useWindowSize();
  const ref = useRef(null);
  const [blockScroll, allowScroll] = useScrollBlock();
  const isEven = identifier % 2 === 0 ? true : false;
  const [selectPiece, setSelectPiece] = useState(
    'deselected',
    'selected',
    'smallSelected'
  );
  const [tallness, setTallness] = useState('taller');

  const toggle = () => {
    if (selectPiece === 'selected' || selectPiece === 'smallSelected') {
      setSelectPiece('deselected');
      allowScroll();
    } else {
      if (width < 600) {
        setSelectPiece('selected');
        blockScroll();
      } else if (width > 600) {
        setSelectPiece('smallSelected');
        blockScroll();
      }
    }
  };

  const variants = {
    selected: {
      width: '100vw',
      paddingTop:
        identifier === 0
          ? '32%'
          : identifier === 1
          ? '87%'
          : identifier === 2
          ? '23%'
          : identifier === 3
          ? '44%'
          : identifier === 4
          ? '94%'
          : identifier === 5
          ? '67%'
          : identifier === 6
          ? '93%'
          : '30%',
      zIndex: 5,
      borderColor: '#CBB3BF00',
      marginBottom: identifier === 7 ? '150px' : '8px',
    },
    smallSelected: {
      paddingTop:
        identifier === 0
          ? '26%'
          : identifier === 1
          ? '61%'
          : identifier === 2
          ? '23%'
          : identifier === 3
          ? '44%'
          : identifier === 4
          ? '61%'
          : identifier === 5
          ? '61%'
          : identifier === 6
          ? '61%'
          : '22%',
      zIndex: 5,
      borderColor: '#CBB3BF00',
      marginBottom: identifier === 7 ? '150px' : '8px',
    },
    deselected: { zIndex: 2 },
    tall: {
      height: '186.5px',
    },
    shorter: {
      height: '135px',
    },
    taller: {
      height: '43vh',
    },
  };

  const variantsTwo = {
    selected: {
      scale: 150,
      opacity: 0.6,
      zIndex: 4,
      transition: { duration: 0.5 },
    },
    smallSelected: {
      scale: 150,
      opacity: 0.6,
      zIndex: 4,
      transition: { duration: 0.5 },
    },
    deselected: {
      scale: 1,
      transition: { duration: 0.5 },
      zIndex: 3,
      opacity: 0,
    },
  };

  useEffect(() => {
    if (selectPiece === 'selected' || selectPiece === 'smallSelected') {
      const { top } = ref.current.getBoundingClientRect();
      const adjustedTop = top - 40;
      window.scrollBy({ top: adjustedTop - 40, left: 0, behavior: 'smooth' });
    }
  }, [selectPiece, identifier]);

  useEffect(() => {
    if (height < 825 && width < 600) {
      setTallness('shorter');
    } else if (height > 825 && width < 600) {
      setTallness('tall');
    } else if (width > 600) {
      setTallness('taller');
    }
  }, [height]);

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        ref={ref}
        component={motion.div}
        sx={{
          backgroundImage: `url(/art/${imgName}.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition:
            width < 600
              ? identifier === 3
                ? '20% 35%'
                : identifier === 5
                ? '50% 45%'
                : identifier === 6
                ? '50% 25%'
                : identifier === 7
                ? '50% 70%'
                : 'center'
              : width > 600 &&
                (identifier === 2
                  ? '50% 30%'
                  : identifier === 3
                  ? '20% 35%'
                  : identifier === 4
                  ? '60% 50%'
                  : identifier === 5
                  ? '50% 45%'
                  : identifier === 6
                  ? '50% 25%'
                  : identifier === 7
                  ? '50% 35%'
                  : 'center'),
          backgroundSize:
            width < 600
              ? identifier === 3
                ? '105%'
                : identifier === 5 || identifier === 6
                ? '100%'
                : '120%'
              : width > 600 &&
                (identifier === 2
                  ? '109%'
                  : identifier === 1
                  ? '115%'
                  : identifier === 3
                  ? '113%'
                  : identifier === 4
                  ? '109%'
                  : identifier === 5 || identifier === 6
                  ? '100%'
                  : '111%'),
          width: '85vw',
          height: '186.5px',
          borderRadius: '24px',
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: 'malachite.main',
          my: '8px',
          zIndex: 2,
          position: 'relative',
          display: 'block',
        }}
        initial={{ opacity: 0, x: isEven ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: '-150px 0px -50px 0px' }}
        transition={{ duration: 0.35 }}
        animate={[selectPiece, tallness]}
        variants={variants}
        onClick={toggle}
      ></Box>
      <DarkCircleOverlay
        width='10px'
        height='10px'
        background='#000'
        borderRadius='100px'
        top='50%'
        left='50%'
        zIndex='1'
        position='absolute'
        initial={{ opacity: 0 }}
        activate={selectPiece}
        variants={variantsTwo}
        toggle={toggle}
      ></DarkCircleOverlay>
    </Box>
  );
}
