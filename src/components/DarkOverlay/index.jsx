import React from 'react';

import Menu from '../Menu';

import { useTransition, animated } from 'react-spring';

import { Box } from '@mui/material';

export default function DarkOverlay({ showHeaderMenu, setShowHeaderMenu, parallax }) {
    const transitions = useTransition(showHeaderMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: showHeaderMenu,
        delay: 200,
    });

    const hideMenu = () => {
        setShowHeaderMenu(false);
    };

    return transitions(
        (styles, item) => item && <animated.div style={styles}>
            <Box sx={{
                position: 'absolute', 
                width: '100vw', 
                height: '100vh', 
                background: '#000', 
                opacity: 0.6 
            }} onClick={hideMenu}>
            </Box>
            <Box sx={{ width: '35.31vw', display: 'flex', justifyContent: 'center' }}>
                <Menu showHeaderMenu={showHeaderMenu} parallax={parallax} setShowHeaderMenu={setShowHeaderMenu}></Menu>
            </Box>
        </animated.div>
    );
}