import EditData from "./EditData";

import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Card, Box, Dialog, DialogContent, Typography, TextField, Button, DialogTitle, MenuItem, InputLabel, FormControl, Select } from "@mui/material";

function DataTask({ openForm, handleClose, name, HandleChange, fetchData, taskData, handleFormSubmit }) {

    const [editTaskId, setEditTaskId] = useState(null);
    const [editTaskText, setEditTaskText] = useState("");
    const [newTaskText, setNewTaskText] = useState("");

    const [roll, setRoll] = useState("")

    const emplyeeroll = ["Backend Development", "Frontend Development (Frontend)", "Testing (QA or Testing)", "Design (UI/UX Design)"]

    const [status, setStatus] = useState("Not Started")
    const handleEditClick = (taskId, taskText) => {
        setEditTaskId(taskId);
        setEditTaskText(taskText);
    };

    const handleEditSubmit = () => {
        const updatedTask = {
            id: editTaskId,
            task: editTaskText,
            userName: name,
        };

        fetch(`http://localhost:8000/userTask/${editTaskId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTask),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Failed to update task");
            })
            .then((data) => {
                fetchData();
            })
            .catch((error) => {
                console.error("Error updating task:", error);
            })
            .finally(() => {
                setEditTaskId(null);
                setEditTaskText("");
            });
    };

    const HandleUserRoll = (e) => {
        setRoll(e.target.value)

    }
    console.log(roll, "pppppp")
    const handleAddTask = () => {

        const newTask = {
            task: newTaskText,
            userName: name,
            status: status,
            userRoll: roll
        };

        fetch("http://localhost:8000/userTask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                throw new Error("Failed to add task");
            })
            .then((data) => {
                fetchData();
            })
            .catch((error) => {
                console.error("Error adding task:", error);
            })
            .finally(() => {
                setNewTaskText("");
            });
    };

    return (

        <Dialog fullScreen open={openForm} onClose={handleClose}>
            <DialogContent style={{ background: "#9EA3B0" }}>
                <Box margin='auto'
                    justifyContent='center'
                    style={{ width: "40%", position: "relative", top: "100px" }}
                >

                    <Card sx={{ m: "40px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", background: "#E0D3DE" }}>
                        <Typography style={{ textAlign: "center", position: "relative", top: "20px", fontSize: "30px" }}>Task For {name}</Typography>
                        <FormControl style={{ width: "30%", position: "relative", top: "30px", left: "30px" }}>
                            <InputLabel id="demo-simple-select-label">User's Roll</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={HandleUserRoll}
                                value={roll}
                            >
                                {emplyeeroll.map((item) => (
                                    <MenuItem key={item} value={item}>{item}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            id="outlined-basic"
                            label="Add Task"
                            variant="outlined"
                            sx={{ m: "30px", width: "40%", background: "white", position: "relative", left: "20px" }}
                            onChange={(e) => setNewTaskText(e.target.value)}
                            value={newTaskText}
                        />

                        <Button variant="contained" onClick={handleAddTask} style={{ height: "60px", position: "relative", top: "30px", borderRadius: "50px" }}>
                            <AddIcon />
                        </Button>

                        <EditData taskData={taskData} name={name} editTaskId={editTaskId} setEditTaskText={setEditTaskText} handleEditSubmit={handleEditSubmit} handleEditClick={handleEditClick} editTaskText={editTaskText} />

                        <Button

                            variant="contained" onClick={handleFormSubmit} sx={{ m: "30px", position: "relative", left: "50px", bottom: "30px", fontSize: "20px", background: "#F89267" }}>
                            Submit

                        </Button>
                    </Card>
                </Box>


            </DialogContent>

        </Dialog>

    );
}

export default DataTask;

