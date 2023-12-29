

import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Card,
  Box,
  MenuItem,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SessionTimeout from "./SessionTimeout";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    width: "95%",
    maxWidth: 600,
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(10),
    padding: theme.spacing(3),
    border: '2px solid gray',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.down('sm')]: {
      width: "90%",
    },
  },
  label: {
    marginLeft: theme.spacing(1),
  },
  input: {
    width: "100%",
    margin: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: '#337CCF',
    marginLeft: theme.spacing(1),
  },
  heading: {
    textAlign: "center",
  },
}));

const Staff = (props) => {
  const classes = useStyles();
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [nameError, setNameError] = useState("");

  const handleName = (e) => {
    const inputName = e.target.value;

    if (/^[A-Za-z\s]*$/.test(inputName) || inputName === "") {
      setName(inputName);
      setNameError("");
    } else {
      setNameError("'Only alphabet letters and spaces are allowed'");
    }
  };

  const handleAttendance = (e) => {
    setAttendance(e.target.value);
  };

  const handleOnClick = () => {
    if (name && date && attendance) {
      const data = { name, attendance, date };
      fetch(`http://localhost:8000/Attendence`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          alert("Data saved successfully");
          setName("");
          setDate(new Date().toISOString().slice(0, 10));
          setAttendance("");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Please fill in all the information in the form");
    }
  };

  return (
    <Box className={classes.container}>
       {props.showSessionTimeout ? (
        <SessionTimeout
          onExtendSession={props.handleExtendSession}
          onLogout={props.handleLogoutFromSessionTimeout}
        />
      ) : (
      <Card className={classes.card}>
        <Typography variant="h4" className={classes.heading}>
          Staff Page
        </Typography>
        <label className={classes.label} htmlFor="Name">
          Name
        </label>
        <TextField
          id="name"
          type="text"
          value={name}
          onChange={handleName}
          className={classes.input}
          error={Boolean(nameError)}
          helperText={nameError}
          autoComplete="off"
        />

        <label className={classes.label} htmlFor="Attendance">
          Attendance
        </label>
        <Select
          id="attendance"
          value={attendance}
          onChange={handleAttendance}
          className={classes.input}
        >
          <MenuItem value="Present">Present</MenuItem>
          <MenuItem value="Absent">Absent</MenuItem>
        </Select>

        <label className={classes.label} htmlFor="date">
          Date
        </label>
        <TextField
          id="date"
          type="text"
          value={date}
          InputProps={{ readOnly: true }}
          className={classes.input}
        />

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleOnClick}
        >
          Submit
        </Button>
      </Card>
      )}
    </Box>
  );
};

export default Staff;
