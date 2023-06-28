import React from 'react'
import NavMenu from '../common/NavMenu'
import Box from '@mui/material/Box';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import DrawerHeader from '../common/DrawerHeader'
import DataTable from '../common/DataTable'


function createData(name, clusters, nodes, cpus, memory, gpus, department) {
    return {
        name,
        nodes,
        cpus,
        memory,
        gpus,
        department,
    };
}

const headerCells = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Cluster Name',
    },
    {
        id: 'nodes',
        numeric: true,
        disablePadding: false,
        label: 'Nodes',
    },
    {
        id: 'cpus',
        numeric: true,
        disablePadding: false,
        label: 'CPU(s)',
    },
    {
        id: 'memory',
        numeric: true,
        disablePadding: false,
        label: 'Memory',
    },
    {
        id: 'gpus',
        numeric: true,
        disablePadding: false,
        label: 'GPU(s)',
    },
    {
        id: 'department',
        numeric: true,
        disablePadding: false,
        label: 'Department',
    },
];

const rows = [
    createData('cluster-30', 5, 30, 100, 4, "oven"),
    createData('cluster-31', 15, 300, 1000, 20, "conveyer"),
];
export default function Clusters(props) {
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
                    <DataTable title="Clusters" dataSource={rows} headerCells={headerCells} target="/cluster" />
                </Box>

            </Box>
        </>
    )

}
