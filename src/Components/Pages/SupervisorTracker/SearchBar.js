import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";

function SearchBar() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterdata, setFilterdata] = useState([]);

  useEffect(() => {

    fetch("http://localhost:3000/employees")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const HanldeAdd = () => {

    setFilterdata([...filterdata, search]);
    setSearch(""); 
  };

  const filteredPeople = data.filter((person) =>

    person.name.toLowerCase().includes(search.toLowerCase()) || person.lastname.toLowerCase().includes(search.toLowerCase())|| person.name.toLowerCase().includes(search.toLowerCase()) 

  );


  console.log(filteredPeople ,"filteredPeople ")

  return (
    <div>degignation
      <TextField
        onChange={handleChange}
        value={search}
        label="Search by name"
      />
      <Button variant="contained" onClick={HanldeAdd}>
        Add
      </Button>

      
     
    </div>
  );
}

export default SearchBar;