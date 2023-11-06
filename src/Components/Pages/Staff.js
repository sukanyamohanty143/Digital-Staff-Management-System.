import React, { useState } from "react";
import { TextField, Button, Typography, Card, Box, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
  },
  card: {
    maxWidth: 400,
    marginBottom: 20,
    padding: theme.spacing(1),
    marginTop:30
  },
  label: {
    marginBottom: theme.spacing(1),
  },
  input: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(2),
  },
  heading:{
    marginTop:100,
  }
}));



const Staff = () => {
  const classes = useStyles();
  const [date, setDate] = useState(); 
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");

  const HandleName = (e) => {
    setName(e.target.value);
  };

  const HandleAttendence = (e) => {
    setAttendance(e.target.value);
  };

  const HandleDate = (e) => {
    setDate(e.target.value);
  };

  const HandleClick = () => {



    if (name && date && attendance ) {
      const data = { name, attendance, date };
      fetch("http://localhost:3000/Attendence", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      
        .then((res) => {
          alert("Data saved successfully");
          setName("");
          setAttendance("Present");
        })
        .catch((error) => {
          console.error(error);
        });
    } else{
      alert("Please fill all the information in the form");
    }
  };

  return (
    <div className={classes.container}>
      <Typography variant="h3" className={classes.heading}>
        Staff Page
      </Typography>
      <Card className={classes.card}>
        <Box>
          <label className={classes.label} htmlFor="Name">
            Name
          </label>
          <TextField
            id="name"
            type="text"
            value={name}
            onChange={HandleName}
            className={classes.input}
          />
        </Box>
        <Box>
          <label className={classes.label} htmlFor="Attendance">
            Attendance
          </label>
          <Select
            id="attendance"
            value={attendance}
            onChange={HandleAttendence}
            className={classes.input}
          >
            <MenuItem value="Present">Present</MenuItem>
            <MenuItem value="Absent">Absent</MenuItem>
          </Select>
        </Box>
        <Box>
          <label className={classes.label} htmlFor="date">
            Date
          </label>
          <TextField
            id="date"
            type="date"
            value={date}
            onChange={HandleDate}
            className={classes.input}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={HandleClick}
        >
          Submit
        </Button>
      </Card>
    </div>
    
  );
};

export default Staff;
