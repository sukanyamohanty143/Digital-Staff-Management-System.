import "./App.css";
import React from 'react';
// import Home from "./Components/Pages/Home";
// import Registration from "./Components/Pages/Registration";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Staff from "./Components/Pages/Staff";
// import Staff from "./Components/Pages/Staff";
import SupervisorPage from "./Components/Pages/Supervisor/SuppervisorPage"
function App(){
    return (
        <>
             {/* <Router>
                <Routes>
                     <Route path="/" element={<Home />} /> 
                     <Route path="/registration" element={<Registration />} /> 
                </Routes>

            </Router> */}
            {/* <Staff/> */}
            {/* <Staff/> */}
            {/* <AdminPage/> */}
            <SupervisorPage/>

            
        </>
    )
}

export default App;