import { Dialog, DialogContent, Typography, TextField, Button, DialogTitle, DialogContentText } from "@mui/material";

function DataTask({ openForm, handleClose, name, HandleChange, fetchData, taskData, handleFormSubmit }) {
    return (
        <>


            <Dialog open={openForm} onClose={handleClose} style={{ background: "#2b5876" }}>
                <div className="" style={{ width: "100%", height: "600px", background: "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 " ,boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
                    <DialogTitle>
                        <Typography  style={{textAlign: "center",fontSize:"30px",position:"relative",top:"20px"}}> {name} Task</Typography>
                    </DialogTitle>

                    <DialogContent style={{ background: "rgba(255,255,255, .4)", height: "450px", borderRadius: "100px" }}>

                        <TextField id="outlined-basic" label="Enter Task" variant="outlined" style={{ marginTop: "10px",position:"relative",top:"70px" }} onChange={HandleChange} />

                        <Button variant="contained" onClick={fetchData} style={{height:"55px",position:"relative",top:"80px",backgroundColor: "#3f51b5"}}>
                            Add Task
                        </Button>

                        <Typography style={{position:"relative",top:"100px",fontSize:"20px"}}>Current task for {name}</Typography>
                        
                        <ul>
                            {taskData
                                .filter((item) => item.userName === name)
                                .map((taskItem) => (
                                    <>
                                        <div key={taskItem.id}>
                                            <Typography style={{position:"relative",top:"150px",fontSize:"20px"}}>{taskItem.task}</Typography>
                                            <Button style={{position:"relative",top:"100px"}} variant="contained">Edit</Button>
                                        </div>
                                    </>

                                ))}
                        </ul>

                        <Button variant="contained" sx={{backgroundColor: "#3f51b5", color: "white",position:"relative",top:"200px" }} onClick={handleFormSubmit} fullWidth>
                            Submit
                        </Button>

                    </DialogContent>

                    <DialogContent>
                        
                    </DialogContent>
                </div>
            </Dialog>



        </>
    )
}
export default DataTask;

