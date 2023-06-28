import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import * as Icons from '@mui/icons-material';



const DynamicMuiIcon = ( {name} ) => {
    const IconComponent = Icons[name];
    if (!IconComponent) { // Return a default one
        return <Icons.Inbox />;
    }

    return <IconComponent />;
};

export default function MenuItem(props) {

    const navigate = useNavigate();
    const target = props.target;
    return (
        <ListItem key={props.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: props.open ? 'initial' : 'center',
                    px: 2.5,
                }}
                onClick={() => navigate(target)}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: props.open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                >
                    <DynamicMuiIcon name={props.icon} />
                    
                </ListItemIcon>
                <ListItemText primary={props.label} sx={{ opacity: props.open ? 1 : 0 }} />
            </ListItemButton>
        </ListItem>
    )
}
