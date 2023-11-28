import EditData from "./EditData";

import React, { useState } from "react";

import { Dialog, DialogContent, Typography, TextField, Button, DialogTitle } from "@mui/material";

function DataTask({ openForm, handleClose, name, HandleChange, fetchData, taskData, handleFormSubmit }) {

    const [editTaskId, setEditTaskId] = useState(null);
    const [editTaskText, setEditTaskText] = useState("");
    const [newTaskText, setNewTaskText] = useState("");

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
                console.error("Failed to add task");
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

        <Dialog open={openForm} onClose={handleClose} style={{ background: "#2b5876" }}>

            <div className="" style={{ width: "100%", height: "600px", background: "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 ", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
                <DialogTitle>
                    <Typography style={{ textAlign: "center", fontSize: "30px", position: "relative", top: "20px" }}>{name} Task</Typography>
                </DialogTitle>

                <DialogContent style={{ background: "rgba(255,255,255, .4)", height: "450px", borderRadius: "100px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography style={{ position: "relative", top: "20px", fontSize: "20px" }}>Current task for {name}</Typography>

                    <EditData taskData={taskData} name={name} editTaskId={editTaskId} setEditTaskText={setEditTaskText} handleEditSubmit={handleEditSubmit} handleEditClick={handleEditClick} editTaskText={editTaskText} />

                    <TextField
                        id="outlined-basic"
                        label="Add Task"
                        variant="outlined"
                        style={{ margin: "10px", width: "70%" }}
                        onChange={(e) => setNewTaskText(e.target.value)}
                        value={newTaskText}
                    />
                    <Button variant="contained" onClick={handleAddTask}>
                        Add Task
                    </Button>
                    <Button variant="contained" sx={{ backgroundColor: "#3f51b5", color: "white", marginTop: "10px", width: "70%" }} onClick={handleFormSubmit} fullWidth>
                        Submit
                    </Button>

                </DialogContent>


                <DialogContent></DialogContent>
            </div>

        </Dialog>

    );
}

export default DataTask;

