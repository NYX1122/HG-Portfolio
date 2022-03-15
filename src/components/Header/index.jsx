import React from 'react';

import { useSpring, animated, config } from 'react-spring';

import { AppBar, Toolbar, Typography, IconButton, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; 

export default function Header({ visibleHeader }) {
    console.log(visibleHeader);
    const props = useSpring({
        to: { x: 0 },
        from: { x: 0 },
    });

    return (
        <animated.div style={props}>
            <AppBar position='fixed'>
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