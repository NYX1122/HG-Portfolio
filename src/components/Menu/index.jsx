import React from 'react';

import { useTransition, animated } from 'react-spring';

import { Box } from '@mui/material';

export default function Menu({ showHeaderMenu }) {
    const transitions = useTransition(showHeaderMenu, {
        from: { y: '-100px', x: '25%' },
        enter: { y: '500px', x: '25%' },
        leave: { y: '-100px', x: '25%' },
        reverse: showHeaderMenu,
        delay: 200,
    })

    return transitions(
        (styles, item) => item && <animated.div style={styles}>
            <Box sx={{
                width: 240, 
                height: 256,
                background: 'linear-gradient(to bottom right, #FBFE5C, #FC6BFF, #FFFFFF)',
                borderRadius: '25px',
                position: 'fixed',
            }}></Box>
        </animated.div>
    );
}