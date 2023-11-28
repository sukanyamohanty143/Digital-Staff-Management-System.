import { TextField,Button,Typography } from "@mui/material";
function EditData({ taskData, name, editTaskId, setEditTaskText, handleEditSubmit, handleEditClick ,editTaskText}) {

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
                    style={{ margin: "10px", width: "70%" }}
                    onChange={(e) => setEditTaskText(e.target.value)}
                    value={editTaskText}
                  />
                  <Button variant="contained" onClick={handleEditSubmit}>
                    Save
                  </Button>
                </>
              ) : (
                <>
                  <Typography style={{ fontSize: "20px" }}>{taskItem.task}</Typography>
                  <Button variant="contained" onClick={() => handleEditClick(taskItem.id, taskItem.task)}>
                    Edit
                  </Button>
                </>
              )}
            </div>
          ))}
      </ul>
    </>

  )
}
export default EditData;



{/* <EditData taskData={taskData} name={name} editTaskId={editTaskId } setEditTaskText={setEditTaskText}  handleEditSubmit={handleEditSubmit} handleEditClick={handleEditClick}  /> */ }
