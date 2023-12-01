import React, { useEffect, useState } from "react";
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

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';


import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    },
    card: {
        width: 900,
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




function Newtask() {

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

    const classes = useStyles();
    const [selectData, setSelectData] = useState({ status: '' });
    console.log("selectData", selectData);

    const [data, setData] = useState([]);
    const [task, setTask] = useState(" ");
    const [listData, setListData] = useState([]);

    const [editIndex, setEditIndex] = useState(null);
    const [editTask, setEditTask] = useState("");

    const handleSelect = (event, index) => {
        const { name, value } = event.target;
        const updatedData = [...data];
        updatedData[index] = { ...updatedData[index], [name]: value };
        setData(updatedData);
        setSelectData({ ...selectData, [name]: value });
    };

    const editTaskone = (index) => {
        setEditIndex(index);
        setEditTask(data[index].task);
    };

    const saveEdit = (index) => {
        const updatedTask = { task: editTask };
        const taskId = data[index].id;

        fetch(`http://localhost:8000/Task/${taskId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTask),
        })
            .then(response => response.json())
            .then(() => {
                const updatedData = [...data];
                updatedData[index] = { ...updatedData[index], task: editTask };
                setData(updatedData);
                setEditIndex(null);
                setEditTask("");
            })
            .catch(error => {
                console.error("Error updating task:", error);
            });
    };


    useEffect(() => {
        fetch("http://localhost:8000/Task")
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                setData(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [listData]);


    const addTask = () => {
        const newTask = { task: task };
        fetch("http://localhost:8000/Task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
        })
            .then(response => response.json())
            .then((responseData) => {
                setListData((prevListData) => [...prevListData, responseData.task]);
                setData((prevData) => [...prevData, responseData.task]);
                setTask("");
            })
            .catch(error => {
                console.error("Error adding new task:", error);
            });
    };

    const removeActivity = (id) => {
        const taskId = data[id].id;
        fetch(`http://localhost:8000/Task/${taskId}`, {
            method: "DELETE",
        })
            .then(response => response.json())
            .then(() => {
                const updatedListData = listData.filter((elem, index) => index !== id);
                setListData(updatedListData);

                const updatedData = [...data];
                updatedData.splice(id, 1);
                setData(updatedData);
            })
            .catch(error => {
                console.error("Error deleting data:", error);
            });
    }


    return (

        <div className={classes.container}>
            <h1>Employee Task</h1>
            <Card style={{ boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)' }}>
                <Box className="boxone" >
                    <Typography variant="h6" >Employee task</Typography>
                    <TextField type="text" placeholder="add task" value={task} onChange={(e) => setTask(e.target.value)} />
                    <Button style={{ width: "100", height: "70", backgroundColor: "green", color: "white" }} onClick={addTask}>add task
                        <AddCircleOutlineIcon />
                    </Button>
                </Box>

                <CardContent className={classes.card}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography style={{ textAlign: "center" }} variant="h5">Tasks</Typography>


                            {data.map((item, id) => (
                                <Box className="tastbox" key={id} marginBottom={2}>
                                    {editIndex === id ? (
                                        <>
                                            <TextField
                                                type="text"
                                                value={editTask}
                                                onChange={(e) => setEditTask(e.target.value)}
                                            />
                                            <DataSaverOnIcon onClick={() => saveEdit(id)}></DataSaverOnIcon>
                                        </>
                                    ) : (
                                        <>
                                            <Grid container spacing={2}>
                                                <Grid item xs={6} >
                                                    <Typography variant="h6">{item.userName}</Typography>
                                                    <p variant="h6">{item.task}</p>
                                                    {/* <Typography variant="h6">{item.status}</Typography> */}
                                                    {/* <Typography variant="h6">{item.task}</Typography> */}

                                                </Grid>

                                                <Grid item xs={6}>
                                                    <DeleteIcon className="removebtn" onClick={() => removeActivity(id)} />
                                                    <EditIcon className="editbtn" style={{ marginLeft: "20px" }} onClick={() => editTaskone(id)}>
                                                        Edit
                                                    </EditIcon>
                                                </Grid>
                                            </Grid>
                                        </>
                                    )}
                                </Box>
                            ))}


                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="h5" style={{ textAlign: "center" }}>Status</Typography>

                            {data.map((item, i) => (
                                <Box key={i} marginBottom={2} style={{ textAlign: "center" }}>

                                    <TextField

                                        name="status"
                                        select
                                        label="Status"
                                        value={item.status}
                                        onChange={(event) => handleSelect(event, i)}
                                        helperText={!item.status ? 'According to task keep status' : 'Select Status from here'}
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
}

export default Newtask;






















// import React, { useEffect, useState } from "react";
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

// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';


// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//     container: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",

//     },
//     card: {
//         width: 900,
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




// function UserTask() {

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
//         {
//             value: 'Not started',
//             status: 'Not started',
//         },
//     ];

//     const classes = useStyles();
//     const [selectData, setSelectData] = useState({ status: '' });
//     const [data, setData] = useState([]);
//     const [task, setTask] = useState(" ");
//     const [listData, setListData] = useState([]);
//     const [editIndex, setEditIndex] = useState(null);
//     const [editTask, setEditTask] = useState("");


//     const handleSelect = (event, index) => {
//         const { value } = event.target;
//         const updatedData = [...data];
//         updatedData[index] = { ...updatedData[index], status: value };
//         setData(updatedData);

//         const updatedStatus = {
//             status: value,
//             userName: data[index].userName,
//             task: data[index].task,
//         };
//         const taskId = data[index].id;

//         fetch(`http://localhost:8000/userTask/${taskId}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(updatedStatus),
//         })
//             .then((response) => response.json())
//             .then(() => {
//             })
//             .catch((error) => {
//                 console.error("Error updating status:", error);
//             });
//     };


//     const editTaskone = (index) => {
//         setEditIndex(index);
//         setEditTask(data[index].task);
//     };

//     const saveEdit = (index) => {
//         const updatedTask = { task: editTask };
//         const taskId = data[index].id;

//         fetch(` http://localhost:8000/userTask/${taskId}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(updatedTask),
//         })
//             .then(response => response.json())
//             .then(() => {
//                 const updatedData = [...data];
//                 updatedData[index] = { ...updatedData[index], task: editTask };
//                 setData(updatedData);
//                 setEditIndex(null);
//                 setEditTask("");
//             })
//             .catch(error => {
//                 console.error("Error updating task:", error);
//             });
//     };


//     useEffect(() => {
//         fetch(" http://localhost:8000/userTask")
//             .then(res => res.json())
//             .then(data => {
//                 console.log("data", data);
//                 setData(data);
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//             });
//     }, [listData]);


//     const addTask = () => {
//         const newTask = { task: task };
//         fetch(" http://localhost:8000/userTask", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newTask),
//         })
//             .then(response => response.json())
//             .then((responseData) => {
//                 setListData((prevListData) => [...prevListData, responseData.task]);
//                 setData((prevData) => [...prevData, responseData.task]);
//                 setTask("");
//             })
//             .catch(error => {
//                 console.error("Error adding new task:", error);
//             });
//     };

//     const removeActivity = (id) => {
//         const taskId = data[id].id;
//         fetch(` http://localhost:8000/userTask/${taskId}`, {
//             method: "DELETE",
//         })
//             .then(response => response.json())
//             .then(() => {
//                 const updatedListData = listData.filter((elem, index) => index !== id);
//                 setListData(updatedListData);

//                 const updatedData = [...data];
//                 updatedData.splice(id, 1);
//                 setData(updatedData);
//             })
//             .catch(error => {
//                 console.error("Error deleting data:", error);
//             });
//     }


//     return (

//         <div className={classes.container}>
//             <h1>Employee Task</h1>
//             <Card style={{ boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)' }}>

//                 <Box className="boxone" >
//                     <Typography variant="h6" >Add Task Here</Typography>
//                     <TextField type="text" placeholder="add task" value={task} onChange={(e) => setTask(e.target.value)} />
//                     <Button style={{ width: "100", height: "70", backgroundColor: "green", color: "white" }} onClick={addTask}>add task
//                         <AddCircleOutlineIcon />
//                     </Button>
//                 </Box>

//                 <CardContent className={classes.card}>

//                         <Grid container spacing={2}>
//                             <Grid item xs={8}>
//                                 <Typography style={{ textAlign: "center" }} variant="h5">Tasks</Typography>
//                                 {data.map((item, id) => (
//                                     <Box className="tastbox" key={id} marginBottom={2}>
//                                         {editIndex === id ? (
//                                             <>
//                                                 <TextField
//                                                     type="text"
//                                                     value={editTask}
//                                                     onChange={(e) => setEditTask(e.target.value)}
//                                                 />
//                                                 <DataSaverOnIcon onClick={() => saveEdit(id)}></DataSaverOnIcon>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <Grid container spacing={4}>
//                                                     <Grid item xs={3} >
//                                                         <Typography variant="h6">{item.name}</Typography>
//                                                         <p variant="h6">{item.userName}</p>
//                                                     </Grid>

//                                                     <Grid item xs={3}>
//                                                         <p variant="h6">{item.task}</p>
//                                                     </Grid>
//                                                     <Grid item xs={3}>
//                                                         <p variant="h6">{item.status}</p>
//                                                     </Grid>

//                                                     <Grid item xs={3}>
//                                                         <DeleteIcon className="removebtn" onClick={() => removeActivity(id)} />
//                                                         <EditIcon className="editbtn" style={{ marginLeft: "20px" }} onClick={() => editTaskone(id)}>
//                                                             Edit
//                                                         </EditIcon>
//                                                     </Grid>

//                                                 </Grid>
//                                             </>
//                                         )}
//                                     </Box>
//                                 ))}
//                             </Grid>


//                             <Grid item xs={4}>
//                                 <Typography variant="h5" style={{ textAlign: "center" }}>Status</Typography>
//                                 {data.map((item, i) => (
//                                     <Box className="statusbox" key={i} marginBottom={2} style={{ textAlign: "center" }}>
//                                         <TextField
//                                             name="status"
//                                             select
//                                             label="Status"
//                                             value={item.status}
//                                             onChange={(event) => handleSelect(event, i)}
//                                             helperText={!item.status ? 'Choose status' : 'Select Status from here'}
//                                         >
//                                             {selectStatus.map((item) => (
//                                                 <MenuItem key={item.value} value={item.value}>
//                                                     {item.status}
//                                                 </MenuItem>
//                                             ))}

//                                         </TextField>
//                                     </Box> 

//                                 ))}
//                             </Grid>
//                             <hr />

//                         </Grid>



//                 </CardContent>
//             </Card>

//         </div>
//     );
// }

// export default UserTask;



















































































