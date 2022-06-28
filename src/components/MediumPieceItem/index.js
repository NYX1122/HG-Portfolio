import React, { useRef, useEffect } from 'react';

import DarkCircleOverlay from '../DarkCircleOverlay';

import { Box } from '@mui/material';

import { motion, useCycle } from 'framer-motion';

import useWindowSize from '../../customHooks/useWindowSize';
import { useScrollBlock } from '../../customHooks/useScrollBlock';

export default function MediumPieceItem({ item }) {
  const [isHovering, changeHovering] = useCycle('notHovering', 'hovering');
  const [isActive, changeActive] = useCycle('inactive', 'active');
  const hoverVariants = {
    hovering: {
      scale: 1.1,
      zIndex: 3,
    },
    notHovering: {
      scale: 1,
      transitionEnd: { zIndex: isActive === 'active' ? 4 : 2 },
    },
    active: {
      // height: `${item.height * 1.5}vw`,
      // width: `${item.width * 1.5}vw`,
      scale:
        item.name === 'cow_medium' || item.name === 'candle_medium'
          ? 1.35
          : 1.5,
      zIndex: 10,
      x:
        item.name === 'bear_dog_medium' ||
        item.name === 'dog_field_medium' ||
        item.name === 'sixties_medium' ||
        item.name === 'cat_medium'
          ? `${item.width / 4.012}vw`
          : item.name === 'moon_medium' ||
            item.name === 'little_girl_medium' ||
            item.name === 'marylin_medium' ||
            item.name === 'car_medium'
          ? `${-1 * (item.width / 4.05)}vw`
          : item.name === 'cow_medium'
          ? `${item.width / 5.75}vw`
          : item.name === 'candle_medium'
          ? `${-1 * (item.width / 5.75)}vw`
          : 0,
    },
  };
  const variantsTwo = {
    active: {
      scale: 230,
      opacity: 0.6,
      zIndex: 4,
      transition: { duration: 0.65 },
    },
    inactive: {
      scale: 1,
      transition: { duration: 0.65 },
      zIndex: 3,
      opacity: 0,
    },
  };

  const [blockScroll, allowScroll] = useScrollBlock();

  const toggle = () => {
    if (isActive === 'active') {
      changeActive();
      changeHovering();
      allowScroll();
    } else {
      changeActive();
      changeHovering();
      blockScroll();
    }
  };

  const ref = useRef(null);
  const { height } = useWindowSize();
  const windowHeight = height;

  useEffect(() => {
    if (isActive === 'active') {
      const { top, height } = ref.current.getBoundingClientRect();
      window.scrollBy({
        top: top - (windowHeight - height) / 2,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [isActive]);

  return (
    <Box
      component={motion.div}
      sx={{
        width: `${item.width}vw`,
        height: `${item.height}vw`,
        position: 'relative',
        zIndex: 2,
      }}
      animate={isActive === 'active' ? 'notHovering' : isHovering}
      onHoverStart={() => changeHovering()}
      onHoverEnd={() => changeHovering()}
      variants={hoverVariants}
    >
      <Box
        ref={ref}
        component={motion.div}
        sx={{
          backgroundImage: `url(/artMedium/${item.name}.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundClip: 'unset',
          width: `${item.width}vw`,
          height: `${item.height}vw`,
          backgroundSize: '101%',
          backgroundPosition: 'center',
          position: 'relative',
          zIndex: 2,
        }}
        animate={isActive}
        onClick={toggle}
        variants={hoverVariants}
      ></Box>
      <DarkCircleOverlay
        width='10px'
        height='10px'
        background='#000'
        borderRadius='100px'
        top='50%'
        left='50%'
        zIndex='10'
        position='absolute'
        initial={{ opacity: 0 }}
        activate={isActive}
        variants={variantsTwo}
        toggle={toggle}
      ></DarkCircleOverlay>
    </Box>
  );
}
