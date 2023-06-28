import React from 'react'
import NavMenu from '../common/NavMenu'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Configuration(props) {

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <NavMenu />
                <br />
                <br />
                <br />
                <br />
                <br />
                Configuration
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                </Box>
            </Box>
        </>

    )
}
