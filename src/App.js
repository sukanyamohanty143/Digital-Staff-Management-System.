

import "./App.css";
import React from 'react';
import Home from "./Components/Pages/Home";
import Registration from "./Components/Pages/Registration";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import SupervisorPage from "./Components/Pages/Supervisor/SuppervisorPage"
import AdminPage from "./Components/Pages/Admin/admin"
function App(){

    return (
        <>
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/registration" element={<Registration />} />
                </Routes>
            </Router>
            <AdminPage/>
            </>
        </>

    );
}

export default App;
