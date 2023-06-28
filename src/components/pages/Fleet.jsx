//import Button from '@mui/material/Button';
//import TextField from '@mui/material/TextField';
//import FormControl from '@mui/material/FormControl';
import { experimentalStyled as styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
//import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import React, { useState, setState } from "react";
import { TextField, Button, Box, Paper } from "@mui/material";

import NavMenu from '../common/NavMenu';
import DrawerHeader from '../common/DrawerHeader';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import Draggable from "react-draggable";


const DraggableCard = ({ text, bgColor }) => {
    return (
        <Draggable>
            <Card
                style={{ width: "40%", backgroundColor: bgColor, color: "#ffffff" }}
            >
                <Button variant="text">BUY</Button>
                <Typography variant="h6">{text}</Typography>
            </Card>
        </Draggable>
    );
};

const DraggableCardList = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <DraggableCard text="Card 1" bgColor="#f44336" />
            <DraggableCard text="Card 2" bgColor="#2196f3" />
            <DraggableCard text="Card 3" bgColor="#4caf50" />
        </Box>
    );
};


const Cluster = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    Draggable: true,
}));

export default function Fleet(props) {
    const [fleetName, setFleetName] = useState("")
    const [department, setDepartment] = useState("")
    const [fleetClusters, setFleetClusters] = useState([])
    const [fleetNameError, setFleetNameError] = useState(false)
    const [departmentError, setDepartmentError] = useState(false)

    // const clusters=[]
    // setFleetClusters(clusters)

    const onDragOver = (evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";
        console.log("drag over");
    };

    const onDragStart = (evt) => {
        console.log("drag start");
        let element = evt.currentTarget;
        //console.log("element", element.id);
        evt.target.id = element.id;
        element.classList.add("dragged");
        evt.dataTransfer.setData("text/html", evt.target.id);
        evt.dataTransfer.effectAllowed = "move";

    };

    const onDragEnter = (evt) => {
        console.log("drag enter");
        evt.preventDefault();
        let element = evt.currentTarget;
        element.classList.add("dragged-over");
        evt.dataTransfer.dropEffect = "move";

    };

    const onDrop = (evt) => {
        evt.preventDefault();
        evt.currentTarget.classList.remove("dragged-over");
        let data = evt.dataTransfer.getData("text/html");

        //let fleetClusters = this.state.fleetClusters;
        //console.log("data", data, status);
        console.log("cluster", data);

        let cluster = "Cluster Name- 03" + data
       
        //fleetClusters.push(cluster);

        //setFleetClusters(fleetClusters);
        setFleetClusters((fleetClusters) => [...fleetClusters, cluster]);
        //setState({ fleetClusters: fleetClusters });
        console.log("fleetClusters", fleetClusters);
    };

    const handleSubmit = (event) => {
        event.preventDefault()

        setFleetNameError(false)
        setDepartmentError(false)

        if (fleetName === '') {
            setFleetNameError(true)
        }
        if (department === '') {
            setDepartmentError(true)
        }

        if (fleetNameError && departmentError) {
            console.log(fleetName, department)
        }
        console.log(fleetName, department)
    }

    return (
        <>
            <React.Fragment>

                <DrawerHeader />


                <Box sx={{ display: 'flex' }}>
                    <NavMenu />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                        <Stack direction="row" spacing={3}>
                            <Typography variant="h6" noWrap component="div">
                                Fleet Details - props.fleetName-0
                            </Typography>
                            <Button variant="outlined" color="primary" type="submit" align="center" startIcon={<CancelIcon />}>Cancel</Button>
                            <Button variant="contained" color="primary" type="submit" align="center" startIcon={<SaveIcon />} > Save</Button> &nbsp;&nbsp;&nbsp;&nbsp;
                        </Stack>
                        <br />
                        <Grid container spacing={2}>
                            <Paper elevation={2} sx={{ width: '70%', mb: 2 }}>
                                <Box component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 2, width: '45ch' },
                                        width: '100%',
                                    }}

                                >
                                    <TextField
                                        label="Fleet Name"
                                        onChange={e => setFleetName(e.target.value)}
                                        required
                                        variant="outlined"
                                        color="secondary"
                                        type="fleetName"
                                        sx={{ mb: 3 }}
                                        //fullWidth
                                        value={fleetName}
                                        error={fleetNameError}
                                    />
                                    <TextField
                                        label="Department "
                                        onChange={e => setDepartment(e.target.value)}
                                        required
                                        variant="outlined"
                                        color="secondary"
                                        type="department"
                                        value={department}
                                        error={departmentError}
                                        //fullWidth
                                        sx={{ mb: 3 }}
                                    />
                                    <TextField
                                        id="outlined-multiline-static"
                                        onChange={e => setDepartment(e.target.value)}
                                        label="Notes"
                                        multiline
                                        rows={5}
                                    />

                                    <br />
                                    <Paper
                                        elevation={2}
                                        sx={
                                            { width: '90%', mb: 3 }
                                            //{ height: '50vh', mb: 2}
                                        }

                                    >
                                        Clusters...
                                        <div className="drop-container"
                                            onDragOver={onDragOver}
                                            onDragEnter={onDragEnter}
                                            onDrop={onDrop}
                                        >
                                            {Array.from(fleetClusters).map((_, index) => (
                                                <Grid item xs={2} sm={4} md={4} key={index}>

                                                    <Cluster
                                                        draggable="true"
                                                        name="cluster-{index}"
                                                        id={index}
                                                    >
                                                        Cluster Name-03{index}
                                                    </Cluster>

                                                </Grid>
                                            ))}
                                        </div>


                                    </Paper>
                                </Box>
                            </Paper>
                            <Paper elevation={2} sx={{ width: '30%', mb: 2 }}>
                            

                                <Box sx={{ flexGrow: 1 }}>
                                    <br />
                                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        {Array.from(Array(5)).map((_, index) => (
                                            <Grid item xs={2} sm={4} md={4} key={index}>

                                                {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    Cluster Name-032
                                                </Typography> */}
                                                <Cluster
                                                    draggable="true"
                                                    name="cluster-{index}"
                                                    onDragStart={onDragStart}
                                                    id={index}
                                                >
                                                    Cluster Name-03{index}
                                                </Cluster>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Paper>
                        </Grid>

                    </Box >
                    {/* <Grid container spacing={2}>
                        <Typography variant="h6" noWrap component="div">
                            Fleet Details - props.fleetName-7
                        </Typography>
                        <Box sx={{ width: '100%' }}>
                            <Paper sx={{ width: '100%', mb: 2 }}>



                            </Paper>
                        </Box>
                    </Grid> */}
                    {/* <form autoComplete="off" onSubmit={handleSubmit}>
                        <Typography variant="h6" noWrap component="div">
                            Fleet Details - props.fleetName
                        </Typography>
                        <TextField
                            label="Fleet Name"
                            onChange={e => setFleetName(e.target.value)}
                            required
                            variant="outlined"
                            color="secondary"
                            type="fleetName"
                            sx={{ mb: 3 }}
                            fullWidth
                            value={fleetName}
                            error={fleetNameError}
                        />
                        <TextField
                            label="Department "
                            onChange={e => setDepartment(e.target.value)}
                            required
                            variant="outlined"
                            color="secondary"
                            type="department"
                            value={department}
                            error={departmentError}
                            fullWidth
                            sx={{ mb: 3 }}
                        />
                        <Button variant="outlined" color="secondary" type="submit">Save</Button>

                    </form> */}
                </Box >
            </React.Fragment >
        </>
    );
}

