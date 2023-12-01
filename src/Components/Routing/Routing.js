import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login'
import Staff from '../Pages/Staff'
import Home from '../Pages/Home'
import Registration from '../Pages/Registration'
import AdminPage from '../Pages/AdminPage/admin'
import Supervisor from '../Pages/SupervisorComponent/Supervisor'
import Outer from '../Pages/Outer';
import Profile from '../Pages/Profile'
import EmployeeTable from '../Pages/Table'
import Newtask from '../Pages/Newtask';
import UserTask from '../Pages/UserTask';
import Header from '../Pages/Header'
import Footer from '../Pages/Footer'


function Routing() {


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/supervisor" element={<Supervisor />} />
        <Route path="/outer" element={<Outer/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/table" element={<EmployeeTable />} />
        <Route path="/newtask" element={<Newtask/>} />
        <Route path="/usertask" element={<UserTask/>} />


      </Routes>
      <Footer/>
    </BrowserRouter>


  );
}
export default Routing;