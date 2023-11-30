import { TextField, Button, Typography, Box } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { useEffect, useState } from "react";

function EditData({ taskData, name, editTaskId, setEditTaskText, handleEditSubmit, handleEditClick, editTaskText }) {
  const [statustsak, setTaskStatus] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:8000/userStatus")
      .then((res) => res.json())
      .then((res) => setTaskStatus(res));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(statustsak, "khushboooooo");

  const getUserStatus = (userName) => {
    console.log(userName, "pujaaaaa....")
    const userStatus = statustsak.filter((status) => status.userName === userName);
    return userStatus ? userStatus.status : "No Status";
  };

  return (
    <>
      <ul>
        {taskData
          .filter((item) => item.userName === name)
          .map((taskItem) => (
            <div key={taskItem.id}>
              {editTaskId === taskItem.id ? (
                <>
                  <TextField
                    id="outlined-basic"
                    label="Edit Task"
                    variant="outlined"
                    onChange={(e) => setEditTaskText(e.target.value)}
                    value={editTaskText}
                    style={{ width: "70%" }}
                  />

                  <Button variant="contained" onClick={handleEditSubmit} sx={{ height: "50px", m: "20px", position: "relative", bottom: "17px" }}>
                    Save
                    <SaveAltIcon />
                  </Button>
                </>
              ) : (
                <>
                  <Box style={{ display: "flex" }}>
                    <Box sx={{ width: "90%", m: "20px", borderRadius: "50px" }}>
                      <ul style={{ display: "flex" }}>
                        <div style={{display:"flex"}}>
                          <li>{taskItem.task}</li>
                          <Typography style={{position:"relative",left:"30px",color:"red"}}>Not Started</Typography>
                        </div>
                        <Typography>{getUserStatus(taskItem.userName)}</Typography>
                      </ul>
                    </Box>
                    <EditIcon style={{ color: "red" }} onClick={() => handleEditClick(taskItem.id, taskItem.task)} sx={{ width: "10%", m: "20px", borderRadius: "40px", position: "relative", right: "30px", color: "#79DB79" }} />
                  </Box>
                </>
              )}
            </div>
          ))}
      </ul>
    </>
  );
}
export default EditData;
