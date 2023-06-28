import React from 'react'
import NavMenu from '../common/NavMenu'
import Box from '@mui/material/Box';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import DrawerHeader from '../common/DrawerHeader'
import DataTable from '../common/DataTable'


function createData(id, state, name, created_on, created_by, activated_on, activated_by, deactivated_on, deactivated_by) {
    return {
        id,
        state,
        name,
        created_on,
        created_by,
        activated_on,
        activated_by,
        deactivated_on,
        deactivated_by,
    };
}

const headerCells = [
    {
        id: 'id',
        numeric: true,
        disablePadding: true,
        label: 'id',
    },
    {
        id: 'state',
        numeric: true,
        disablePadding: false,
        label: 'State',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Policy Name',
    }
    ,
    {
        id: 'created_on',
        numeric: true,
        disablePadding: false,
        label: 'Created on',
    },
    {
        id: 'created_by',
        numeric: true,
        disablePadding: false,
        label: 'Created By',
    },
    {
        id: 'activated_on',
        numeric: true,
        disablePadding: false,
        label: 'Activated on',
    },
    {
        id: 'activated_by',
        numeric: true,
        disablePadding: false,
        label: 'Activated By',
    },

];

const rows = [
    //id, state, name, created_on, created_by, activated_on, activated_by, deactivated_on, deactivated_by
    createData(1, "active", 'policy-base', "15-Dec-2021", "Jack Smith", "15-Dec-2021", "Jack Smith"),
    createData(1, "inactive", 'policy-base', "15-Dec-2021", "Jack Smith", "15-Dec-2021", "Jane Doe"),
    
];
export default function Policies(props) {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('clusters');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    return (

        <>
            <DrawerHeader />
            <Box sx={{ display: 'flex' }}>
                <NavMenu />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DataTable title="Policies" dataSource={rows} headerCells={headerCells} target="/cluster" />
                </Box>

            </Box>
        </>
    )

}
