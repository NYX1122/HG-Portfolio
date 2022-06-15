import React, { useRef, useEffect, useState } from 'react';

import DarkCircleOverlay from '../DarkCircleOverlay';

import { Box } from '@mui/material';

import { motion, useCycle } from 'framer-motion';

import useWindowSize from '../../customHooks/useWindowSize';
import { useScrollBlock } from '../../customHooks/useScrollBlock';

export default function PieceItem({ imgName, identifier }) {
  const ref = useRef(null);
  const [blockScroll, allowScroll] = useScrollBlock();
  const isEven = identifier % 2 === 0 ? true : false;
  const [selectPiece, setSelectPiece] = useCycle('deselected', 'selected');
  const [tallness, setTallness] = useState('taller');

  const toggle = () => {
    if (selectPiece === 'selected') {
      setSelectPiece('deselected');
      allowScroll();
    } else {
      setSelectPiece('selected');
      blockScroll();
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
      borderColor: '#CBB3BF',
      marginBottom: identifier === 7 ? '150px' : '8px',
    },
    deselected: { zIndex: 2 },
    taller: {
      height: '186.5px',
    },
    shorter: {
      height: '135px',
    },
  };

  const variantsTwo = {
    selected: {
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
    if (selectPiece === 'selected') {
      const { top } = ref.current.getBoundingClientRect();
      const adjustedTop = top - 40;
      window.scrollBy({ top: adjustedTop - 40, left: 0, behavior: 'smooth' });
    }
  }, [selectPiece, identifier]);

  const { height } = useWindowSize();

  useEffect(() => {
    if (height < 825) {
      setTallness('shorter');
    } else if (height > 825) {
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
            identifier === 3
              ? '20% 35%'
              : identifier === 5
              ? '50% 45%'
              : identifier === 6
              ? '50% 25%'
              : identifier === 7
              ? '50% 70%'
              : 'center',
          backgroundSize:
            identifier === 3
              ? '105%'
              : identifier === 5 || identifier === 6
              ? '100%'
              : '120%',
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
