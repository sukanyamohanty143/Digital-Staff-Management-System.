import "./App.css";
import React from 'react';
import Home from "./Components/Pages/Home";
import Staff from "./Components/Pages/Staff"
import Registration from "./Components/Pages/Registration";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
        <Staff/>
        <br></br>
        <SupervisorPage/>
        </>
    )  
}
export default App;