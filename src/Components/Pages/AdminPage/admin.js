import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, Container, TableContainer, Table, TableHead, TableBody, TableRow, Paper, MenuItem, Box, Select } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UserForm from "./AddButton";
import { FormControl, InputLabel } from "@mui/material";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#83A2FF',
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 15,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: '#FFEBD8',
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const AdminPage = () => {
    const [users, setUsers] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [selectedRoll, setSelectedRoll] = useState("");

    const fetchData = () => {
        let apiUrl = "http://localhost:8000/employees";
        if (selectedRoll) {

            apiUrl += `?roll=${selectedRoll}`;

        }

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setFilteredData(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, [selectedRoll]);

    const addUser = (newUser) => {
        if (selectedUser) {
            fetch(`http://localhost:8000/employees/${selectedUser.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            })
                .then(() => fetchData())
                .catch((error) => {
                    console.error("Error updating user data:", error);
                });
            setSelectedUser(null);
        }
    };

    const closeForm = () => {
        setShowForm(false);
        setSelectedUser(null);
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        setShowForm(true);
    };

    const handleDelete = (user) => {
        fetch(`http://localhost:8000/employees/${user.id}`, {
            method: "DELETE",
        })
            .then(() => fetchData())
            .catch((error) => {
                console.error("Error deleting user data:", error);
            });
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        const filtered = users.filter((item) => {
            return (
                item.firstname.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (!selectedRoll || item.roll === selectedRoll)
            );
        });
        setFilteredData(filtered);
        setSearchTerm("");
    };

    return (
        <>
            <Box sx={{
                display: "flex", m: "30px", alignItems: "center", justifyContent: "center", width: "93%", height: "70px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            }}>
                <FormControl style={{ width: "10%" }}>
                    <InputLabel id="demo-simple-select-label">Roll of user's</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Roll of user's"
                        onChange={(e) => setSelectedRoll(e.target.value)}
                        value={selectedRoll}
                    >
                        <MenuItem value="tech">Tech</MenuItem>
                        <MenuItem value="non-tech">Non-Tech</MenuItem>

                    </Select>
                </FormControl>

               
                <Grid item xs={12} marginLeft={2} marginBottom={3}>
                    <TextField
                        label="Search here"
                        size="small"
                        fullWidth
                        name="search here....."
                        onChange={handleChange}
                    ></TextField>
                </Grid>
                <Button variant="contained" size="medium" sx={{ marginLeft: '20px', marginBottom: "25px" }} onClick={handleSearch}>Search</Button>
            </Box>

            {showForm && (
                <div
                    style={{
                        position: 'fixed',
                        zIndex: 999,
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,.5)"
                    }}
                >
                    <div
                        style={{
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)"
                        }}
                    >
                        <UserForm
                            onAddUser={addUser}
                            user={selectedUser}
                            onCloseForm={closeForm}
                        />
                    </div>
                </div>
            )}

            <Container style={{ display: 'flex', justifyContent: 'center', mT: '20px' }}>
                <TableContainer component={Paper} sx={{ width: '1000px', p: '20px', m: '20px' }}>
                    <Table>
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>Firstname</StyledTableCell>
                                <StyledTableCell>Lastname</StyledTableCell>
                                <StyledTableCell>Mobile number</StyledTableCell>
                                <StyledTableCell>Designation</StyledTableCell>
                                <StyledTableCell>Gender</StyledTableCell>
                                <StyledTableCell>Action</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {users === null ? (
                                <TableRow>
                                    <TableCell colSpan={6}>Loading...page</TableCell>
                                </TableRow>
                            ) : (
                                filteredData.map((user) => {
                                    if (!selectedRoll || user.roll === selectedRoll) {
                                        return (
                                            <StyledTableRow key={user.id}>
                                                <StyledTableCell>{user.firstname}</StyledTableCell>
                                                <StyledTableCell>{user.lastname}</StyledTableCell>
                                                <StyledTableCell>{user.mobilenumber}</StyledTableCell>
                                                <StyledTableCell>{user.designation}</StyledTableCell>
                                                <StyledTableCell>{user.gender}</StyledTableCell>
                                                <StyledTableCell>{user.roll}</StyledTableCell>

                                                <StyledTableCell>
                                                    <DeleteIcon
                                                        style={{ marginRight: 10 }}
                                                        onClick={() => handleDelete(user)}
                                                    />
                                                    <EditIcon
                                                        onClick={() => handleEdit(user)}
                                                    />
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        );
                                    } else {
                                        return null;
                                    }
                                })
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
};

export default AdminPage;
