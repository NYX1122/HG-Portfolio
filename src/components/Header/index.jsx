import React from 'react';

import { useSpring, animated } from 'react-spring';

import { AppBar, Toolbar, Typography, IconButton, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; 

export default function Header({ visibleHeader }) {
    const props = useSpring({
        to: { y: -100 },
        from: { y: 0 },
        reverse: visibleHeader
    });

    return (
        <animated.div style={props}>
            <AppBar sx={{ position: 'fixed' }}>
                <Toolbar variant='dense' sx={{ backgroundColor: 'rain.main' }}>
                    <Grid container justifyContent='space-between' alignItems='center'>
                        <Grid item>
                            <Typography variant='h5' color='malachite.main'>HG Art and Photography</Typography>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <MenuIcon sx={{ fontSize: 36, color: 'malachite.main' }}></MenuIcon>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </animated.div>
    );
}