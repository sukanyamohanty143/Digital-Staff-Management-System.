import { TextField, Button, Typography, Box } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
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
                  />
                  <Button variant="contained" onClick={handleEditSubmit}>
                    Save
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

                    <Button variant="contained" onClick={() => handleEditClick(taskItem.id, taskItem.task)} sx={{ width: "10%", m: "20px", borderRadius: "40px" }}>
                      <EditIcon />
                    </Button>

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



