import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; 

export default function Header() {
    return (
        <AppBar position='fixed'>
            <Toolbar variant='dense' sx={{ backgroundColor: 'rain.main' }}>
                <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item>
                        <Typography variant='h5' color='malachite.main'>HG Art and Photography</Typography>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <MenuIcon sx={{ fontSize: 35, color: 'malachite.main' }}></MenuIcon>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}