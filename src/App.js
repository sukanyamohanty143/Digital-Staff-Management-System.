
import "./App.css";
import React from 'react';
import Home from "./Components/Pages/Home";
import Staff from "./Components/Pages/Staff"
import Registration from "./Components/Pages/Registration";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import SupervisorPage from "./Components/Pages/Supervisor/SuppervisorPage"
import AdminPage from "./Components/Pages/AdminPage/admin"
function App(){

    return (
<<<<<<< HEAD
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/registration" element={<Registration />} />
                </Routes>
            </Router>
            <AdminPage/>
        </>

    );
=======
      <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Registration />} />
                
            </Routes>
        </Router>
        <Staff/>
        <br></br>
        <SupervisorPage/>
        </>

    ); 
>>>>>>> origin/main
}

export default App;
