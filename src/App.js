import "./App.css";
import React from 'react';
import Home from "./Components/Pages/Home";
import Registration from "./Components/Pages/Registration";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Pages/Footer";
import SearchBar from "./Components/Pages/SupervisorPrograssTracker/SearchBar";
// import Adminpre from "./Components/Pages/Adimpre";
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
        {/* <Adminpre/> */}
        <SearchBar/>


        <Footer/>
        </>
    )
}

export default App;