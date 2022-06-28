import React from 'react';

import { Box } from '@mui/material';

import { motion, useCycle } from 'framer-motion';

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
        onClick={() => {
          changeActive();
          changeHovering();
        }}
        variants={hoverVariants}
      ></Box>
    </Box>
  );
}
