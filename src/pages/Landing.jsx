import React from 'react';

import LandingArrow from '../components/SVG/LandingArrow';

import { useSpring, animated } from 'react-spring';

import { Typography, Box, Stack } from '@mui/material';

export default function Landing() {
    const props = useSpring({
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
        config: { duration: 800 }
    });

    return (
        // MUI BOX METHOD
        <animated.div style={props}>
            <Box style={{
                backgroundImage: 'url(/art/girl_dog_sleep.jpg)',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <Stack justifyContent='center' alignItems='center' spacing={8}>
                    <Typography variant='h2' sx={{ color: 'white', textShadow: 'black 0 5px 5px', fontWeight: 200, marginTop: '25vh', marginBottom: '10vh' }}>Welcome.</Typography>
                    <Typography variant='h3' sx={{ color: 'white', textShadow: 'black 0 5px 5px', fontWeight: 200 }}>My Work</Typography>
                    <LandingArrow sx={{ textShadow: 'black 0 5px 5px' }}></LandingArrow>
                </Stack>
            </Box>
        </animated.div>
        //IMAGE PACKAGE METHOD
        //<Image className='landing-img' src='/art/girl_dog_sleep.jpg' height='100%' width='440px' fit='contain' />
    )
}