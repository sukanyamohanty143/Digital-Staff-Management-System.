import "./App.css";
import React from 'react';
import Header from "./Components/Pages/Header";
import Home from "./Components/Pages/Home";
import Registration from "./Components/Pages/Registration";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Pages/Footer";

function App() {
    return (
        <>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/registration" element={<Registration />} />

                </Routes>
            </Router>
            <Footer />
        </>
    )
}

export default App;