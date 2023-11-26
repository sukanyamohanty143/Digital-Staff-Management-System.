



// import React, { useState } from "react";
// import {
//     TextField,
//     Button,
//     Typography,
//     Card,
//     Box,
//     MenuItem,
//     CardContent,
//     Grid,
// } from "@material-ui/core";


// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//     container: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",

//     },
//     card: {
//         width: 600,
//         marginBottom: 30,
//         marginTop: 40,
//         padding: 30,

//     },
//     label: {
//         marginLeft: 10
//     },
//     input: {
//         width: "95%",
//         margin: 15
//     },
//     button: {
//         marginTop: theme.spacing(2),
//         backgroundColor: '#337CCF',
//         marginLeft: 10
//     },
//     heading: {
//         padding: 40,
//         textAlign: "center"
//     },
// }));



// const Task = () => {

//     const selectStatus = [
//         {
//             value: 'started',
//             status: 'Started',
//         },
//         {
//             value: 'prossesing',
//             status: 'Prossesing',
//         },
//         {
//             value: 'completed',
//             status: 'Completed',
//         },
//     ];

//     const [selectData, setSelectData] = useState({ status: '' });
//     console.log("selectData", selectData);

//     const handleSelect = (event) => {
//         const { name, value } = event.target;
//         setSelectData({ ...selectData, [name]: value })
//     };


//     const classes = useStyles();
//     const [activity, setActivity] = useState(" ");
//     const [listData, setListData] = useState([]);

//     const [editIndex, setEditIndex] = useState(null);


//     const addActivity = () => {
//         setListData((listData) => {
//             const updatedList = [...listData, activity]
//             setActivity(" ");
//             return updatedList
//         })
//     }

//     const removeActivity = (i) => {
//         const updatedListData = listData.filter((elem, id) => i !== id);
//         setListData(updatedListData);
//     }

//     const editActivity = (i) => {
//         setActivity(listData[i]);
//         setEditIndex(i);
//     }

//     const saveEdit = () => {
//         setListData((listData) => {
//             const updatedList = [...listData];
//             updatedList[editIndex] = activity;
//             setActivity(" ");
//             setEditIndex(null);
//             return updatedList;
//         });
//     }


//     return (
//         <div className={classes.container}>
//             <h1>Employee Task</h1>
//             <Card style={{ boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)' }}>
//                 <Box className="boxone" >
//                     <Typography variant="h6" >Employee task</Typography>
//                     <br />
//                     <TextField className="inputactivity" type="text" placeholder="add acivity" value={activity} onChange={(e) => setActivity(e.target.value)} />
//                     <Button style={{ marginLeft: "10px" }} onClick={addActivity}></Button>

//                     <Button style={{ width: "100", height: "70", backgroundColor: "green", color: "white" }} className="addbtn" onClick={editIndex !== null ? saveEdit : addActivity}>
//                         {editIndex !== null ? "Save Edit" : "Add Task  "}
//                         <AddCircleOutlineIcon style={{ margin: "3" }} />
//                     </Button>
//                 </Box>

//                 <CardContent className={classes.card}>
//                     <Grid container spacing={2}>
//                         <Grid item xs={6}>
//                             <Typography style={{ textAlign: "center" }} variant="h5">Tasks</Typography>
//                             {listData.map((item, i) => (
//                                 <Box className="tastbox" key={i} marginBottom={2} >
//                                     <Typography variant="h5">{item}

//                                         <DeleteIcon className="removebtn" onClick={() => removeActivity(i)}></DeleteIcon>
//                                         <EditIcon className="editbtn" style={{ marginLeft: "20px" }} variant="contained" onClick={() => editActivity(i)}>Edit</EditIcon>

//                                     </Typography>
//                                 </Box>
//                             ))}
//                         </Grid>

//                         <Grid item xs={6}>
//                             <Typography variant="h5" style={{ textAlign: "center" }}>Status</Typography>

//                             {listData.map((item, i) => (
//                                 <Box key={i} marginBottom={2}>
//                                     <TextField
//                                         name="status"
//                                         select
//                                         label="Status"
//                                         value={item.status}
//                                         onChange={(event) => handleSelect(event, i)}
//                                         helperText={!item.status ? 'According to task put status' : 'Select Status from here'}
//                                     >
//                                         {selectStatus.map((selectStatus) => (
//                                             <MenuItem key={selectStatus.value} value={selectStatus.value}>
//                                                 {selectStatus.status}
//                                             </MenuItem>
//                                         ))}
//                                     </TextField>
//                                 </Box>
//                             ))}
                            
//                         </Grid>
//                     </Grid>
//                 </CardContent>
//             </Card>

//         </div>
//     );
// };

// export default Task;
























































































































import React, { useState } from "react";
import {
    TextField,
    Button,
    Typography,
    Card,
    Box,
    MenuItem,
    CardContent,
    Grid,
} from "@material-ui/core";


import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    },
    card: {
        width: 600,
        marginBottom: 30,
        marginTop: 40,
        padding: 30,

    },
    label: {
        marginLeft: 10
    },
    input: {
        width: "95%",
        margin: 15
    },
    button: {
        marginTop: theme.spacing(2),
        backgroundColor: '#337CCF',
        marginLeft: 10
    },
    heading: {
        padding: 40,
        textAlign: "center"
    },
}));



const Task = () => {

    const selectStatus = [
        {
            value: 'started',
            status: 'Started',
        },
        {
            value: 'prossesing',
            status: 'Prossesing',
        },
        {
            value: 'completed',
            status: 'Completed',
        },
    ];

    const [selectData, setSelectData] = useState({ status: '' });
    console.log("selectData", selectData);

    const handleSelect = (event) => {
        const { name, value } = event.target;
        setSelectData({ ...selectData, [name]: value })
    };


    const classes = useStyles();
    const [activity, setActivity] = useState(" ");
    const [listData, setListData] = useState([]);

    const [editIndex, setEditIndex] = useState(null);


    const addActivity = () => {
        setListData((listData) => {
            const updatedList = [...listData, activity]
            setActivity(" ");
            return updatedList
        })
    }

    const removeActivity = (i) => {
        const updatedListData = listData.filter((elem, id) => i !== id);
        setListData(updatedListData);
    }

    const editActivity = (i) => {
        setActivity(listData[i]);
        setEditIndex(i);
    }

    const saveEdit = () => {
        setListData((listData) => {
            const updatedList = [...listData];
            updatedList[editIndex] = activity;
            setActivity(" ");
            setEditIndex(null);
            return updatedList;
        });
    }


    return (
        <div className={classes.container}>
            <h1>Employee Task</h1>
            <Card style={{ boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)' }}>
                <Box className="boxone" >
                    <Typography variant="h6" >Employee task</Typography>
                    <br />
                    <TextField className="inputactivity" type="text" placeholder="add acivity" value={activity} onChange={(e) => setActivity(e.target.value)} />
                    <Button style={{ marginLeft: "10px" }} onClick={addActivity}></Button>

                    <Button style={{ width: "100", height: "70", backgroundColor: "green", color: "white" }} className="addbtn" onClick={editIndex !== null ? saveEdit : addActivity}>
                        {editIndex !== null ? "Save Edit" : "Add Task  "}
                        <AddCircleOutlineIcon style={{ margin: "3" }} />
                    </Button>
                </Box>

                <CardContent className={classes.card}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography style={{ textAlign: "center" }} variant="h5">Tasks</Typography>
                            {listData.map((item, i) => (
                                <Box className="tastbox" key={i} marginBottom={2} >
                                    <Typography variant="h5">{item}

                                        <DeleteIcon className="removebtn" onClick={() => removeActivity(i)}></DeleteIcon>
                                        <EditIcon className="editbtn" style={{ marginLeft: "20px" }} variant="contained" onClick={() => editActivity(i)}>Edit</EditIcon>

                                    </Typography>
                                </Box>
                            ))}
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="h5" style={{ textAlign: "center" }}>Status</Typography>

                            {listData.map((item, i) => (
                                <Box key={i} marginBottom={2}>

                                    <TextField
                                        name="status"
                                        select
                                        label="Status"
                                        value={item.status}
                                        onChange={(event) => handleSelect(event, i)}
                                        helperText={!item.status ? 'According to task put status' : 'Select Status from here'}
                                    >
                                        {selectStatus.map((selectStatus) => (
                                            <MenuItem key={selectStatus.value} value={selectStatus.value}>
                                                {selectStatus.status}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Box>
                                
                            ))}
                            
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

        </div>
    );
};

export default Task;