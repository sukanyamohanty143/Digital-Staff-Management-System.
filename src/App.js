import "./App.css";
import React from 'react';
import Home from "./Components/Pages/Home";
import Registration from "./Components/Pages/Registration";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Pages/Footer";
// import SearchBar from "./Components/Pages/SupervisorTracker/SearchBar";
import Staff from "./Components/Pages/Staff";
import Profile from "./Components/Pages/Profile";
// import Admin from "./Components/Pages/AdminPage/admin";
import Outer from "./Components/Pages/Outer";
import Table from"./Components/Pages/Table";
function App() {
    return (
        <>


            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/registration" element={<Registration />} />

                </Routes>
            </Router>
            <Staff/>

<Profile/>

            {/* <SearchBar/> */}
{/* <Admin/> */}
            <Footer />
            <Outer/>
            <Table/>


            
        </>
    )
}
export default App;