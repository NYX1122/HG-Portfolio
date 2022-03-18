import React from 'react';

import { useTransition, animated } from 'react-spring';

import { Box, Typography, Stack, Button } from '@mui/material';

export default function Menu({ showHeaderMenu }) {
    const transitions = useTransition(showHeaderMenu, {
        from: { y: -300 },
        enter: { y: 20 },
        leave: { Y: -300 },
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
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box sx={{
                    width: 236,
                    height: 252,
                    backgroundColor: 'rose.main',
                    borderRadius: '24px'
                }}>
                    <Stack spacing='23px' sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ textAlign: 'center', fontSize: '30px', color: 'malachite.main', marginTop: '8px' }}>MENU</Typography>
                        <Box sx={{
                            width: 95, 
                            height: 32,
                            background: 'linear-gradient(to bottom right, #FBFE5C, #FC6BFF, #FFFFFF)',
                            borderRadius: '25px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box sx={{
                                width: 91,
                                height: 28,
                                backgroundColor: 'rose.main',
                                borderRadius: '24px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Button sx={{ fontSize: '25px', padding: 0, height: '25px', color: 'malachite.main', fontWeight: 'lighter' }}>PIECES</Button>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: 140, 
                            height: 32,
                            background: 'linear-gradient(to bottom right, #FBFE5C, #FC6BFF, #FFFFFF)',
                            borderRadius: '25px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box sx={{
                                width: 136,
                                height: 28,
                                backgroundColor: 'rose.main',
                                borderRadius: '24px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Button sx={{ fontSize: '25px', padding: 0, height: '25px', color: 'malachite.main', fontWeight: 'lighter' }}>ABOUT ME</Button>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: 182, 
                            height: 32,
                            background: 'linear-gradient(to bottom right, #FBFE5C, #FC6BFF, #FFFFFF)',
                            borderRadius: '25px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box sx={{
                                width: 178,
                                height: 28,
                                backgroundColor: 'rose.main',
                                borderRadius: '24px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Button sx={{ fontSize: '25px', padding: 0, height: '25px', color: 'malachite.main', fontWeight: 'lighter' }}>COMMISSIONS</Button>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </animated.div>
    );
}