import React from 'react';

import FadeInSection from '../components/FadeInSection';
import LandingArrow from '../components/SVG/LandingArrow';

import { Typography, Box, Stack } from '@mui/material';

export default function Landing() {
    return (
        // MUI BOX METHOD
        <Box style={{
            backgroundImage: 'url(/art/girl_dog_sleep.jpg)',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <Stack justifyContent='center' alignItems='center' spacing={10}>
                <Typography variant='h2' sx={{ color: 'white', textShadow: 'black 0 5px 5px', fontWeight: 200, marginTop: '25vh', marginBottom: '10vh' }}>Welcome.</Typography>
                <Typography variant='h3' sx={{ color: 'white', textShadow: 'black 0 5px 5px', fontWeight: 200 }}>My Work</Typography>
                <LandingArrow sx={{ textShadow: 'black 0 5px 5px' }}></LandingArrow>
            </Stack>
        </Box>

        //IMAGE PACKAGE METHOD
        //<Image className='landing-img' src='/art/girl_dog_sleep.jpg' height='100%' width='440px' fit='contain' />
    )
}