import "./App.css";
import React from 'react';
import Home from "./Components/Pages/Home";
// import Staff from "./Components/Pages/Staff"
import Registration from "./Components/Pages/Registration";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD

// import admin from "./Components/Pages/AdminPage/admin"
// import AdminPage form "./Components/AdminPage/Pages/admin"

import SupervisorPage from "./Components/Pages/Supervisor/SuppervisorPage"

function App(){
    return (
      <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Registration />} />
                
            </Routes>
        </Router>
        <admin/>
        {/* <Staff/> */}
        <br></br>
        <SupervisorPage/>
=======
import Staff from "./Components/Pages/Staff";
// import Staff from "./Components/Pages/Staff";

function App(){
    return (
        <>
             <Router>
                <Routes>
                     <Route path="/" element={<Home />} /> 
                     <Route path="/registration" element={<Registration />} /> 
                </Routes>

            </Router>
            {/* <Staff/> */}
            <Staff/>
            {/* <AdminPage/> */}
            {/* <SupervisorPage/> */}

            
>>>>>>> 112f9a7abbc54831af8468e04bf8f7acc84a2729
        </>
    )  
}
export default App;