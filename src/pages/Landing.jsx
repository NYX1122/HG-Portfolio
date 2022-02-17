import React from 'react';

import FadeInSection from '../components/FadeInSection';

import { Typography, Box } from '@mui/material';

export default function Landing() {
    return (
        // MUI BOX METHOD
        <Box style={{
            backgroundImage: 'url(/art/girl_dog_sleep.jpg)',
            backgroundRepeat: 'no-repeat',
            width: '440px',
            height: '844px',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <Typography variant='h3'>Welcome.</Typography>
        </Box>

        //IMAGE PACKAGE METHOD
        //<Image className='landing-img' src='/art/girl_dog_sleep.jpg' height='100%' width='440px' fit='contain' />
    )
}