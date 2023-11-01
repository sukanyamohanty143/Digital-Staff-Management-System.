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

const getFormattedDate = (date) => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

const Staff = () => {
  const classes = useStyles();
  const [date, setDate] = useState(getFormattedDate(new Date())); 
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
    const currentDate = new Date();
    const selectedDate = new Date(date);

    const diff = Math.floor((currentDate - selectedDate) / (1000 * 60 * 60 * 24));

    if (name && date && attendance && diff >= -3 && diff <= 4) {
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
          setDate(getFormattedDate(new Date())); 
          setAttendance("Present");
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (diff > -3) {
      alert("Selected date is more than 3 days in the past.");
    } else if (diff < 4) {
      alert("Selected date is more than 4 days in the future.");
    } else {
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
