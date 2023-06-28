import React from 'react'
import NavMenu from '../common/NavMenu'
import Box from '@mui/material/Box';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import DrawerHeader from '../common/DrawerHeader'

export default function Logout(props) {

    return (
        <>
            <DrawerHeader />
            <Box sx={{ display: 'flex' }}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    Logout
                </Box>
            </Box>
        </>
    )
}
