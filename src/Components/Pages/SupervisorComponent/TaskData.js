import EditData from "./EditData";

import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Card, Box, Dialog, DialogContent, Typography, TextField, Button, DialogTitle } from "@mui/material";

function DataTask({ openForm, handleClose, name, HandleChange, fetchData, taskData, handleFormSubmit }) {

    const [editTaskId, setEditTaskId] = useState(null);
    const [editTaskText, setEditTaskText] = useState("");
    const [newTaskText, setNewTaskText] = useState("");

    const [status, setStatus] = useState(["Panding", "Completed", "goingOn", "NOt Started"])
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
                console.error("Failed to update task");
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

    const handleAddTask = () => {

        const newTask = {
            task: newTaskText,
            userName: name,
            status: status
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
            <DialogContent>
                <Box margin='auto'
                    justifyContent='center'
                    style={{ width: "40%", position: "relative", top: "100px"}}

                >

                    <Card sx={{ m: "40px", border: "1px solid red", boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset", background: " rgba(255,255,255, .4)" }}>
                        <Typography style={{ textAlign: "center", position: "relative", top: "20px", fontSize: "30px" }}>Task For {name}</Typography>
                        <TextField
                            id="outlined-basic"
                            label="Add Task"
                            variant="outlined"
                            sx={{ m: "30px", width: "77%", background: "white" }}
                            onChange={(e) => setNewTaskText(e.target.value)}
                            value={newTaskText}
                        />


                        <Button variant="contained" onClick={handleAddTask} style={{ height: "60px", position: "relative", top: "30px", right: "20px", borderRadius: "50px", background: "#ff4081" }}>
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

