
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import React from 'react';

const DrawerHeaderTheme = ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
});

const DrawerHeader = styled('div')(DrawerHeaderTheme);

export default DrawerHeader;
