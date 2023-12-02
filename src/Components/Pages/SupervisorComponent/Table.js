// import React, { useEffect, useRef, useState } from "react";
// import { useReactToPrint } from "react-to-print";
// import DataTask from "./TaskData";
// import {
//   Box,
//   Grid,
//   Table,
//   TableContainer,
//   TableHead,
//   TableCell,
//   TableRow,
//   MenuItem,
//   InputLabel,
// } from "@mui/material";
// import FormControl from "@mui/material/FormControl";
// import { Select } from "@mui/material";
// import PaginationCom from "./Pegination";
// import GeneratePdf from "./GeneratePdf";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// function TableData({ data, setFilteredData }) {
//   const [task, setTask] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [clickedItem, setClickedItem] = useState(null);
//   const [openForm, setOpenForm] = useState(false);
//   const [taskData, setTaskData] = useState([]);
//   const [employeStatus, setEmployeStatus] = useState("");

//   const itemsPerPage = 10;

//   const componentRef = useRef();

//   const GenretePdfSave = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   const fetchDataApi = () => {
//     fetch("http://localhost:8000/userTask")
//       .then((res) => res.json())
//       .then((res) => {
//         setTaskData(res);
//       });
//   };

//   useEffect(() => {
//     fetchDataApi();
//   }, []);

//   const handleSort = () => {
//     if (data.length > 0) {
//       const result = [...data].sort((a, b) => {
//         const titleA = a.name || "";
//         const titleB = b.name || "";
//         return titleA.localeCompare(titleB);
//       });
//       setFilteredData(result);
//     }
//   };

//   const HandelDate = () => {
//     data.sort((a, b) => new Date(a.date) - new Date(b.date));
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
//   const pageCount = Math.ceil(data.length / itemsPerPage);

//   const handleChangePage = (event, newPage) => {
//     setCurrentPage(newPage);
//   };

//   const handleClick = (item) => {
//     setClickedItem(item);
//     setOpenForm(true);
//   };

//   const handleClose = () => {
//     setClickedItem(null);
//     setOpenForm(false);
//   };

//   const handleFormSubmit = () => {
//     handleClose();
//   };

//   const HandleChange = (e) => {
//     setTask(e.target.value);
//   };

//   const getUserRoll = (userName) => {
//     const userTask = taskData.find((task) => task.userName === userName);
//     return userTask ? userTask.userRoll : "";
//   };

//   return (
//     <>
//       <Box sx={{ m: "20px", background: "#FAEBD7" }} ref={componentRef}>
//         <TableContainer>
//           <Table>
//             <TableHead
//               sx={{
//                 background: "#eeeeee",
//                 height: "100px",
//                 m: "10px",
//                 p: "20px",
//                 fontFamily: "Trirong",
//               }}
//             >
//               <TableRow>
//                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>
//                   Name <ArrowDropDownIcon onClick={handleSort} />
//                 </TableCell>
//                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>
//                   attendance
//                 </TableCell>
//                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>
//                   Date <ArrowDropDownIcon onClick={HandelDate} />
//                 </TableCell>
//                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>
//                   Status
//                 </TableCell>
//                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>
//                   Roll
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             {currentItems && currentItems.length > 0 ? (
//               currentItems.map((item, index) => (
//                 <TableRow key={index}>
//                   <>
//                     <TableCell
//                       sx={{ textAlign: "center" }}
//                       onClick={() => handleClick(item)}
//                     >
//                       {item.name}
//                     </TableCell>
//                     <TableCell sx={{ textAlign: "center" }}>
//                       {item.attendance}
//                     </TableCell>
//                     <TableCell sx={{ textAlign: "center" }}>{item.date}</TableCell>
//                     <TableCell sx={{ textAlign: "center" }}>
//                       <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                         <InputLabel>Status</InputLabel>

//                         <Select label="Status">

//                           <MenuItem value="Completed">completed</MenuItem>
//                           <MenuItem value="Panding">panding</MenuItem>
//                           <MenuItem value="Started">Started</MenuItem>

//                         </Select>

//                       </FormControl>

//                     </TableCell>
//                     <TableCell sx={{ textAlign: "center" }}>
//                       {getUserRoll(item.name)}
//                     </TableCell>
//                   </>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={3} sx={{ textAlign: "center" }}>
//                   No data
//                 </TableCell>
//               </TableRow>
//             )}
//           </Table>
//         </TableContainer>
//       </Box>

//       <Box sx={{ flexGrow: 1, m: "30px" }}>
//         <Grid container spacing={2}>
//           <Grid item xs={9}>
//             <PaginationCom
//               pageCount={pageCount}
//               currentPage={currentPage}
//               handleChangePage={handleChangePage}
//             />
//           </Grid>
//           <Grid item xs={3}>
//             <GeneratePdf GenretePdfSave={GenretePdfSave} />
//           </Grid>
//         </Grid>
//       </Box>
//       <DataTask
//         openForm={openForm}
//         handleClose={handleClose}
//         name={clickedItem?.name}
//         HandleChange={HandleChange}
//         taskData={taskData}
//         handleFormSubmit={handleFormSubmit}
//         fetchDataApi={fetchDataApi}
//       />
//     </>
//   );
// }
// export default TableData;



// import React, { useEffect, useRef, useState } from "react";
// import { useReactToPrint } from "react-to-print";
// import DataTask from "./TaskData";
// import {
//   Box,
//   Grid,
//   Table,
//   TableContainer,
//   TableHead,
//   TableCell,
//   TableRow,
//   MenuItem,
//   InputLabel,
// } from "@mui/material";
// import FormControl from "@mui/material/FormControl";
// import { Select } from "@mui/material";
// import PaginationCom from "./Pegination";
// import GeneratePdf from "./GeneratePdf";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// function TableData({ data, setFilteredData }) {
//   const [task, setTask] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [clickedItem, setClickedItem] = useState(null);
//   const [openForm, setOpenForm] = useState(false);
//   const [taskData, setTaskData] = useState([]);
//   const [employeStatus, setEmployeStatus] = useState("");

//   const itemsPerPage = 10;

//   const componentRef = useRef();

//   const GenretePdfSave = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   const fetchDataApi = () => {
//     fetch("http://localhost:8000/userTask")
//       .then((res) => res.json())
//       .then((res) => {
//         setTaskData(res);
//       });
//   };

//   useEffect(() => {
//     fetchDataApi();
//   }, []);

//   const handleSort = () => {
//     if (data.length > 0) {
//       const result = [...data].sort((a, b) => {
//         const titleA = a.name || "";
//         const titleB = b.name || "";
//         return titleA.localeCompare(titleB);
//       });
//       setFilteredData(result);
//     }
//   };

//   const HandelDate = () => {
//     data.sort((a, b) => new Date(a.date) - new Date(b.date));
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
//   const pageCount = Math.ceil(data.length / itemsPerPage);

//   const handleChangePage = (event, newPage) => {
//     setCurrentPage(newPage);
//   };

//   const handleClick = (item) => {
//     setClickedItem(item);
//     setOpenForm(true);
//   };

//   const handleClose = () => {
//     setClickedItem(null);
//     setOpenForm(false);
//   };

//   const handleFormSubmit = () => {
//     handleClose();
//   };

//   const HandleChange = (e) => {
//     setTask(e.target.value);
//   };

//   const getUserRoll = (userName) => {
//     const userTask = taskData.find((task) => task.userName === userName);
//     return userTask ? userTask.userRoll : "";
//   };

//   const handleStatusChange = (event, userName) => {
//     const newStatus = event.target.value;

//     setEmployeStatus(newStatus);

//     const userTask = taskData.find((task) => task.userName === userName);

//     if (userTask) {
//       const updatedTask = { ...userTask, status: newStatus };

//       fetch(`http://localhost:8000/userTask/${userTask.id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedTask),
//       })
//         .then((response) => {
//           if (response.ok) {
//             return response.json();
//           }
//           throw new Error("Failed to update task status");
//         })
//         .then((data) => {
//           fetchDataApi();
//         })
//         .catch((error) => {
//           console.error("Error updating task status:", error);
//         });
//     }
//   };

//   return (
//     <>
//       <Box sx={{ m: "20px", background: "#FAEBD7" }} ref={componentRef}>
//         <TableContainer>
//           <Table>
//             <TableHead
//               sx={{
//                 background: "#eeeeee",
//                 height: "100px",
//                 m: "10px",
//                 p: "20px",
//                 fontFamily: "Trirong",
//               }}
//             >
//               <TableRow>
//                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>
//                   Name <ArrowDropDownIcon onClick={handleSort} />
//                 </TableCell>
//                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>
//                   attendance
//                 </TableCell>
//                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>
//                   Date <ArrowDropDownIcon onClick={HandelDate} />
//                 </TableCell>
//                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>
//                   Status
//                 </TableCell>
//                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>
//                   Roll
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             {currentItems && currentItems.length > 0 ? (
//               currentItems.map((item, index) => (
//                 <TableRow key={index}>
//                   <>
//                     <TableCell
//                       sx={{ textAlign: "center" }}
//                       onClick={() => handleClick(item)}
//                     >
//                       {item.name}
//                     </TableCell>
//                     <TableCell sx={{ textAlign: "center" }}>
//                       {item.attendance}
//                     </TableCell>
//                     <TableCell sx={{ textAlign: "center" }}>{item.date}</TableCell>
//                     <TableCell sx={{ textAlign: "center" }}>
//                       <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                         <InputLabel>Status</InputLabel>
//                         <Select
//                           label="Status"
//                           value={employeStatus}
//                           onChange={(event) => handleStatusChange(event, item.name)}
//                         >
//                           <MenuItem value="Completed">Completed</MenuItem>
//                           <MenuItem value="Pending">Pending</MenuItem>
//                           <MenuItem value="Started">Started</MenuItem>
//                         </Select>
//                       </FormControl>
//                     </TableCell>
//                     <TableCell sx={{ textAlign: "center" }}>
//                       {getUserRoll(item.name)}
//                     </TableCell>
//                   </>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={3} sx={{ textAlign: "center" }}>
//                   No data
//                 </TableCell>
//               </TableRow>
//             )}
//           </Table>
//         </TableContainer>
//       </Box>

//       <Box sx={{ flexGrow: 1, m: "30px" }}>
//         <Grid container spacing={2}>
//           <Grid item xs={9}>
//             <PaginationCom
//               pageCount={pageCount}
//               currentPage={currentPage}
//               handleChangePage={handleChangePage}
//             />
//           </Grid>
//           <Grid item xs={3}>
//             <GeneratePdf GenretePdfSave={GenretePdfSave} />
//           </Grid>
//         </Grid>
//       </Box>
//       <DataTask
//         openForm={openForm}
//         handleClose={handleClose}
//         name={clickedItem?.name}
//         HandleChange={HandleChange}
//         taskData={taskData}
//         handleFormSubmit={handleFormSubmit}
//         fetchDataApi={fetchDataApi}
//       />
//     </>
//   );
// }

// export default TableData;



import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import DataTask from "./TaskData";
import {
  Box,
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  MenuItem,
  InputLabel,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import PaginationCom from "./Pegination";
import GeneratePdf from "./GeneratePdf";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function TableData({ data, setFilteredData }) {
  const [task, setTask] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [clickedItem, setClickedItem] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const [taskData, setTaskData] = useState([]);
  const [employeeStatusMap, setEmployeeStatusMap] = useState({});

  const itemsPerPage = 10;

  const componentRef = useRef();

  const GenretePdfSave = useReactToPrint({
    content: () => componentRef.current,
  });

  const fetchDataApi = () => {
    fetch("http://localhost:8000/userTask")
      .then((res) => res.json())
      .then((res) => {
        setTaskData(res);
      });
  };

  useEffect(() => {
    fetchDataApi();
  }, []);

  const handleSort = () => {
    if (data.length > 0) {
      const result = [...data].sort((a, b) => {
        const titleA = a.name || "";
        const titleB = b.name || "";
        return titleA.localeCompare(titleB);
      });
      setFilteredData(result);
    }
  };

  const HandelDate = () => {
    data.sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleClick = (item) => {
    setClickedItem(item);
    setOpenForm(true);
  };

  const handleClose = () => {
    setClickedItem(null);
    setOpenForm(false);
  };

  const handleFormSubmit = () => {
    handleClose();
  };

  const HandleChange = (e) => {
    setTask(e.target.value);
  };

  const getUserRoll = (userName) => {
    const userTask = taskData.find((task) => task.userName === userName);
    return userTask ? userTask.userRoll : "";
  };

  const handleStatusChange = (event, userName) => {
    const newStatus = event.target.value;

    setEmployeeStatusMap((prevStatusMap) => ({
      ...prevStatusMap,
      [userName]: newStatus,
    }));

    const userTask = taskData.find((task) => task.userName === userName);

    if (userTask) {
      const updatedTask = { ...userTask, status: newStatus };

      fetch(`http://localhost:8000/userTask/${userTask.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Failed to update task status");
        })
        .then((data) => {
          fetchDataApi();
        })
        .catch((error) => {
          console.error("Error updating task status:", error);
        });
    }
  };

  return (
    <>
      <Box sx={{ m: "20px", background: "#FAEBD7" }} ref={componentRef}>
        <TableContainer>
          <Table>
            <TableHead
              sx={{
                background: "#eeeeee",
                height: "100px",
                m: "10px",
                p: "20px",
                fontFamily: "Trirong",
              }}
            >
              <TableRow>
                <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>
                  Name <ArrowDropDownIcon onClick={handleSort} />
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>
                  Attendance
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>
                  Date <ArrowDropDownIcon onClick={HandelDate} />
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>
                  Status
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>
                  Roll
                </TableCell>
              </TableRow>
            </TableHead>
            {currentItems && currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <TableRow key={index}>
                  <>
                    <TableCell
                      sx={{ textAlign: "center" }}
                      onClick={() => handleClick(item)}
                    >
                      {item.name}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.attendance}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{item.date}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel>Status</InputLabel>
                        <Select
                          label="Status"
                          value={employeeStatusMap[item.name] || ""}
                          onChange={(event) => handleStatusChange(event, item.name)}
                        >
                          <MenuItem value="Completed">Completed</MenuItem>
                          <MenuItem value="Pending">Pending</MenuItem>
                          <MenuItem value="Started">Started</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {getUserRoll(item.name)}
                    </TableCell>
                  </>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} sx={{ textAlign: "center" }}>
                  No data
                </TableCell>
              </TableRow>
            )}
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ flexGrow: 1, m: "30px" }}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <PaginationCom
              pageCount={pageCount}
              currentPage={currentPage}
              handleChangePage={handleChangePage}
            />
          </Grid>
          <Grid item xs={3}>
            <GeneratePdf GenretePdfSave={GenretePdfSave} />
          </Grid>
        </Grid>
      </Box>
      <DataTask
        openForm={openForm}
        handleClose={handleClose}
        name={clickedItem?.name}
        HandleChange={HandleChange}
        taskData={taskData}
        handleFormSubmit={handleFormSubmit}
        fetchDataApi={fetchDataApi}
      />
    </>
  );
}

export default TableData;
