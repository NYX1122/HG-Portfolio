import React, { useRef, useEffect } from 'react';

import { Box } from '@mui/material';

import { motion, useCycle } from 'framer-motion';

import { useScrollBlock } from '../../customHooks/useScrollBlock';

export default function PieceItem({ imgName, identifier }) {
  const ref = useRef(null);
  const [blockScroll, allowScroll] = useScrollBlock();
  const isEven = identifier % 2 === 0 ? true : false;
  const [selectPiece, setSelectPiece] = useCycle('deselected', 'selected');

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
    },
    deselected: { zIndex: 2 },
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
      console.log(top);
      if (
        identifier === 0 ||
        identifier === 1 ||
        identifier === 2 ||
        identifier === 3
      ) {
        const adjustedTop = Math.sign(top) === 1 ? top / 1.8 : top / 1.8;
        window.scrollBy({ top: adjustedTop - 40, left: 0, behavior: 'smooth' });
      } else if (identifier === 4) {
        const adjustedTop = Math.sign(top) === 1 ? top / 1.75 : top / 0.57;
        window.scrollBy({
          top: adjustedTop - 40,
          left: 0,
          behavior: 'smooth',
        });
      } else if (identifier === 5) {
        const adjustedTop = Math.sign(top) === 1 ? top / 1.33 : top / 0.57;
        window.scrollBy({
          top: adjustedTop - 50,
          left: 0,
          behavior: 'smooth',
        });
      } else if (identifier === 6) {
        const adjustedTop = Math.sign(top) === 1 ? top : top / 0.57;
        window.scrollBy({
          top: adjustedTop - 70,
          left: 0,
          behavior: 'smooth',
        });
      } else if (identifier === 7) {
        window.scrollBy({
          top: top - 70,
          left: 0,
          behavior: 'smooth',
        });
      }
    }
  }, [selectPiece]);

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
          width: 338,
          height: 186.5,
          borderRadius: '24px',
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: 'malachite.main',
          my: '8px',
          zIndex: 2,
          position: 'relative',
        }}
        initial={{ opacity: 0, x: isEven ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: '-150px 0px -50px 0px' }}
        transition={{ duration: 0.5 }}
        animate={selectPiece}
        variants={variants}
        onClick={toggle}
      ></Box>
      <Box
        component={motion.div}
        sx={{
          width: '10px',
          height: '10px',
          background: '#000',
          borderRadius: '100px',
          top: '50%',
          left: '50%',
          zIndex: 1,
          position: 'absolute',
        }}
        initial={{ opacity: 0 }}
        animate={selectPiece}
        variants={variantsTwo}
      ></Box>
    </Box>
  );
}
