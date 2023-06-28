import React from 'react'
import NavMenu from '../common/NavMenu'
import Box from '@mui/material/Box';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import DrawerHeader from '../common/DrawerHeader'
import DataTable from '../common/DataTable'


function createData(state, deployment, fleet, deployment_plan_id, clusters, department) {
    return {
        state,
        deployment,
        fleet,
        deployment_plan_id,
        clusters,
        department,
    };
}

const headerCells = [
    {
        id: 'state',
        numeric: false,
        disablePadding: true,
        label: 'State',
    },
    {
        id: 'deployment',
        numeric: false,
        disablePadding: false,
        label: 'Deployment',
    }
    ,
    {
        id: 'deployment_plan_id',
        numeric: false,
        disablePadding: false,
        label: 'Deployment Plan',
    },
    {
        id: 'fleet',
        numeric: true,
        disablePadding: false,
        label: 'Fleet',
    },
    {
        id: 'cluster',
        numeric: true,
        disablePadding: false,
        label: 'Cluster(s)',
    },
    {
        id: 'department',
        numeric: true,
        disablePadding: false,
        label: 'Department',
    },

];

const rows = [
    //id, deployment, fleet, deployment_plan_id, clusters, department
    createData("unknown", 'dep-009', "f0011", 111, "cluster-022", "oven"),
    createData("success", 'dep-010', "f0015", 111, "cluster-030", "oven"),
    createData("failure", 'dep-011', "f0016", 115, "cluster-033", "conveyer"),
];
export default function Deployments(props) {
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
                    <DataTable title="Deployments" dataSource={rows} headerCells={headerCells} target="/cluster" />
                </Box>

            </Box>
        </>
    )

}
