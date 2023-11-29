import { TextField, Button, Typography, Box } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
function EditData({ taskData, name, editTaskId, setEditTaskText, handleEditSubmit, handleEditClick, editTaskText }) {

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

                  <Button variant="contained" onClick={handleEditSubmit} sx={{height:"50px",m:"20px",position:"relative",bottom:"17px"}}>
                    Save
                    <SaveAltIcon />

                  </Button>
                </>
              ) : (
                <>
                  <Box style={{ display: "flex" }}>

                    <Box sx={{ width: "90%", m: "20px", borderRadius: "50px" }}>
                      <ul>
                        <li>{taskItem.task}</li>
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

  )
}
export default EditData;



