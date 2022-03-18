import React from 'react';

import { Box } from '@mui/material';

export default function Header({ imgName, setVisible }) {
    return (
        <Box sx={{
            width: 342,
            height: 190.5,
            background: 'linear-gradient(to bottom right, #FBFE5C, #FC6BFF, #FFFFFF)',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '10px'
        }}>
            <Box sx={{
                backgroundImage: `url(/art/${imgName}.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: 338,
                height: 186.5,
                borderRadius: '24px'
            }}>
            </Box>
        </Box>
    )
}