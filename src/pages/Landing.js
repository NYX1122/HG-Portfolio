import React from 'react';

import { Typography, Box, Paper } from '@mui/material';

import Image from 'mui-image';

export default function Landing() {
    return (
        <Box style={{
            backgroundImage: 'url(/art/girl_dog_sleep.jpg)',
            backgroundRepeat: 'no-repeat',
            width: '440px',
            height: '844px',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            {/* <Image className='landing-img' src='/art/girl_dog_sleep.jpg' height='100%' width='440px' fit='contain' /> */}
            <Typography variant='h3'>Welcome.</Typography>
        </Box>
    )
}