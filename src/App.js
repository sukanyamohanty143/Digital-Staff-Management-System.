

import "./App.css";
import React from 'react';
import  Home  from "./Components/Pages/Home";
import  Registration  from "./Components/Pages/Registration";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
        </Router>
    );
}

export default App;
