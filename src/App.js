
import "./App.css";
import React from 'react';
import Home from "./Components/Pages/Home";
import Registration from "./Components/Pages/Registration";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SupervisorPage from "./Components/Pages/Supervisor/SuppervisorPage";
// import Staff from "./Components/Pages/Staff";
// import SupervisorPage from "./Components/Pages/Supervisor/SupervisorPage";
// import AdminPage from "./Components/Pages/AdminPage/admin";

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
            <SupervisorPage/>
            {/* <AdminPage/> */}
            {/* <SupervisorPage/> */}
        </>
    )
}

export default App;
