import React, { useRef, useEffect } from 'react';

import DarkCircleOverlay from '../DarkCircleOverlay';

import { Box } from '@mui/material';

import { motion, useCycle } from 'framer-motion';

import useWindowSize from '../../customHooks/useWindowSize';
import { useScrollBlock } from '../../customHooks/useScrollBlock';

export default function MediumPieceItem({ item }) {
  const { height, width } = useWindowSize();
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
      scale: 0.95 / (((item.height / 100) * width) / height),
      zIndex: 10,
      x:
        width < 1200
          ? item.name === 'bear_dog_medium' ||
            item.name === 'dog_field_medium' ||
            item.name === 'sixties_medium' ||
            item.name === 'cow_medium' ||
            item.name === 'cat_medium'
            ? `${(width - (item.width / 100) * width) / 2}px`
            : item.name === 'girl_dog_medium' || item.name === 'tattoo_medium'
            ? `${50 - (item.width / 2 + 33.7)}vw`
            : `-${(width - (item.width / 100) * width) / 2}px`
          : item.name === 'girl_dog_large' ||
            item.name === 'shepherd_medium' ||
            item.name === 'cow_medium' ||
            item.name === 'moon_medium' ||
            item.name === 'cat_large'
          ? `${(width - (item.width / 100) * width) / 2}px`
          : item.name === 'smoking_medium' ||
            item.name === 'tattoo_medium' ||
            item.name === 'puppy_medium'
          ? `${50 - (item.width / 2 + 23.83)}vw`
          : item.name === 'horse_medium'
          ? `-${50 - (item.width / 2 + 26.43)}vw`
          : `-${(width - (item.width / 100) * width) / 2}px`,
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
          backgroundImage: `url(/artMedium/${item.name}.png)`,
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
