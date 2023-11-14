import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login'
import Staff from '../Pages/Staff'
import Home from '../Pages/Home'
import Registration from '../Pages/Registration'
import AdminPage from '../Pages/AdminPage/admin'
import Supervisor from '../Pages/SupervisorComponent/Supervisor';
import Footer from '../Pages/Footer';
import Header from '../Pages/Header';
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
      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}
export default Routing;
