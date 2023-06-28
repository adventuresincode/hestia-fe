import React from 'react'
import NavMenu from '../common/NavMenu'
import Box from '@mui/material/Box';
import DrawerHeader from '../common/DrawerHeader'

export default function Preferences(props) {

    return (
        <>
            <DrawerHeader />
            <Box sx={{ display: 'flex' }}>
                
                <NavMenu />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                Preferences
                </Box>
            </Box>
        </>

    )
}
