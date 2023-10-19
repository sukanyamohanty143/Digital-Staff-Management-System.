

import "./App.css";
import React from 'react';
import  Home  from "./Components/Pages/Home";
import  Registration  from "./Components/Pages/Registration";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from "./Components/Pages/Admin_page/admin";
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/registration" element={<Registration />} />
                </Routes>
            </Router>
            <Admin/>

        </>
    );
}

export default App;
