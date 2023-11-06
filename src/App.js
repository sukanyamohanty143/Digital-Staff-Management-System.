import "./App.css";
import React from 'react';
import Home from "./Components/Pages/Home";
import Registration from "./Components/Pages/Registration";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Pages/Footer";
// import SearchBar from "./Components/Pages/SupervisorTracker/SearchBar";
import Staff from "./Components/Pages/Staff";
import Profile from "./Components/Pages/Profile"
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


            <Footer />


            
        </>
    )
}
export default App;