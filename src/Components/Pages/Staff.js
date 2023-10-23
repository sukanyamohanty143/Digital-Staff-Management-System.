import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Container,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  staff: {
    textAlign: "center",
    padding: theme.spacing(10),
  },
  form1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    marginBottom: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(4),
    position: "relative",
    marginLeft: 20,
  },
  button: {
    marginTop: theme.spacing(),
  },
}));

const Staff = () => {
  const classes = useStyles();
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("Attendance");

  const [data, setData] = useState({
    entries: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && attendance !== "Attendance") {
      const newData = {
        name,
        date,
        attendance,
      };

      setData({
        ...data,
        entries: [...data.entries, newData],
      });

      setName("");
      setDate("");
      setAttendance("Attendance");
      const submittedData = {
        name,
        date,
        attendance,
      };
      console.log("submittedData:",submittedData)

     
    } else {
      alert("Please fill all the information in the form");
    }
  };


  console.log("Submitted Data:", data.entries);

  return (
    <Container className={classes.staff}>
      <Typography variant="h4" gutterBottom>
        Staff Management
      </Typography>
      <br />
      <form className={classes.form1} onSubmit={handleSubmit}>
        <Box>
          <label className={classes.label} htmlFor="Name">
            Name
          </label>
          <TextField
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setAttendance(e.target.value)}
            className={classes.input}
          >
            <MenuItem value="Attendance">Attendance</MenuItem>
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
            onChange={(e) => setDate(e.target.value)}
            className={classes.input}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          type="Submit"
          className={classes.button}
        >
          Submit
        </Button>
      </form>
      
     
      
    
    </Container>
  );
};

export default Staff;
