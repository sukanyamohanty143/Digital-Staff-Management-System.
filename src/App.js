import Login from "./components/Pages/Login";


<<<<<<< HEAD
function App() {
  return (
    <div>
     <Login/>
    </div>
  );
=======
import "./App.css";
import React from 'react';
import Home from "./Components/Pages/Home";
import Registration from "./Components/Pages/Registration";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SupervisorPage from "./Components/Pages/Supervisor/SuppervisorPage"

function App(){

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
        </Router>
    );
>>>>>>> 62753b2fc377191797dd1b86c3b7bb5f2a17cef7
}

export default App;
