import "./App.css";
import React from 'react';
import Home from "./Components/Pages/Home";
import Registration from "./Components/Pages/Registration";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Footer from "./Components/Pages/Footer";
// import SupervisorPage from "./Components/Pages/Supervisor/SuppervisorPage"

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
        <br/>
        {/* <SupervisorPage/> */}


        <Footer/>
=======
import Staff from "./Components/Pages/Staff";
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
             <Staff/> 
            {/* <AdminPage/> */}
            {/* <SupervisorPage/> */}

            
>>>>>>> 7e7fdf0809dcfed5b5efbb8e718b6380e20b3f3a
        </>
    )
}

export default App;