import React from 'react'
import DrawerHeader from '../common/DrawerHeader'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import NavMenu from '../common/NavMenu'
import { alpha } from '@mui/material/styles';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import Draggable from "react-draggable";


// const handleDragStart = (evt) => {
//     console.log("drag start");
//     let element = evt.currentTarget;
//     element.classList.add("dragged");
//     evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
//     evt.dataTransfer.effectAllowed = "move";

// };

const handleDragEnd = (evt) => {
    evt.currentTarget.classList.remove("dragged");
};

const onDragEnter = (evt) => {
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.add("dragged-over");
    evt.dataTransfer.dropEffect = "move";
    console.log("drag enter");
};

const onDragLeave = (evt) => {
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget;
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
        return;
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.remove("dragged-over");
};

const onDragOver = (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
    console.log("drag over");
};

const onDrop = (evt, value, status) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove("dragged-over");
    let data = evt.dataTransfer.getData("text/plain");
    let tasks = this.state.tasks;
    console.log("data", data, status);
    let updated = tasks.map((task) => {
        if (task.id.toString() === data.toString()) {
            task.status = status;
        }
        return task;
    });
    this.setState({ tasks: updated });
};

const DraggableCard = ({ text, bgColor }) => {
    return (
        <Draggable>
            <Card
                style={{ width: "40%", backgroundColor: bgColor, color: "#ffffff" }}
                draggable="true"
                handleDragStart={evt => {
                    console.log("drag start");
                    let element = evt.currentTarget;
                    element.classList.add("dragged");
                    evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
                    evt.dataTransfer.effectAllowed = "move";

                }}
            >
                <Button variant="text">BUY</Button>
                <Typography variant="h6">{text}</Typography>
            </Card>
        </Draggable>
    );
};

const DraggableCardList = () => {
    const handleDragStart = (evt) => {
        console.log("drag start");
        let element = evt.currentTarget;
        element.classList.add("dragged");
        evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
        evt.dataTransfer.effectAllowed = "move";

    };

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    height: "100vh",
                }}

               

            >
                <DraggableCard text="Cluster-1" bgColor="#f44336" onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
                <DraggableCard text="Cluster-2" bgColor="#2196f3" onDragStart={handleDragStart} />
                <DraggableCard text="Cluster-3" bgColor="#4caf50" onDragStart={handleDragStart} />
            </Box>
        </React.Fragment >
    );
};

export default function Users(props) {
    const [clusters, setClusters] = React.useState('asc');
    const [unParentedClusters, setUnParentedClusters] = React.useState('asc');



    return (
        <>
            <DrawerHeader />
            <Box sx={{ display: 'flex' }}>
                <NavMenu />
                <DraggableCardList />
                <br />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3 }}
                    onDragOver={onDragOver}
                >
                    All Users
                    <Paper elevation={2} sx={{ width: '70%', mb: 2 }}>
                        <Box
                            sx={{
                                '& .MuiTextField-root': { m: 2, width: '45ch' },
                                width: '100%',
                            }}


                        >
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Button variant="contained" color="primary" href="#contained-buttons">
                                    Add User
                                </Button>
                            </Box>
                        </Box>
                    </Paper>


                </Box>
            </Box>
        </>
    )
}
