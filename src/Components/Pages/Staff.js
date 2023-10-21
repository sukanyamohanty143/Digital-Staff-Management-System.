import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel, 
  Button,
  Container,
} from "@material-ui/core";
import { formControlClasses } from "@mui/material";
import { color } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  staff: {
    textAlign: "center",
    padding: theme.spacing(20),
  },
  form1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    marginBottom: theme.spacing(78)  },
  input: {
    marginBottom: theme.spacing(4),
    position:"relative",
    top:12,
    marginLeft:50,
  },
  button: {
    marginTop: theme.spacing(3),
  },
}));

const Staff = () => {
  const classes = useStyles();
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("Attendance");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Attendance:", attendance);
    console.log("Date:", date);
  };

  return (
    <Container className={classes.staff}>
      <Typography variant="h4" gutterBottom>
        Staff Management
      </Typography>
      <form className={classes.form1} onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <TextField
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={classes.input}
          />
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label} htmlFor="attendance"> {/* Change 'Label' to 'InputLabel' */}
            
          </InputLabel>
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
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label} htmlFor="date">
            Date
          </InputLabel>
          <TextField
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={classes.input}
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Staff;
