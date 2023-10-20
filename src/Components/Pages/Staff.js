import "./Staff.css";
import React, { useState } from "react";

const Staff = () => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("Attendence");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Attendance:", attendance);
    console.log("Date:", date);
  };

  return (
    <center>
      <div className="staff">
        <h1 className="h1">Staff Management</h1>
        <form  className="form1" onSubmit={handleSubmit}>
          <label className="l1" htmlFor="Name">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <br></br>
          <label className="l2" htmlFor="Attendance">
            Attendance
          </label>
          <select
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
          >
            <option value="Attendence">Attendance</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
          <br></br>
          <br></br>
          <label className="l3" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br></br>
          <br></br>
          <button className="b1" type="submit">
            Submit
          </button>
        </form>
      </div>
    </center>
  );
};

export default Staff;

