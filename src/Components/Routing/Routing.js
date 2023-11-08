import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login'
import Staff from '../Pages/Staff'
import Home from '../Pages/Home'
import Registration from '../Pages/Registration'
import AdminPage from '../Pages/AdminPage/admin'
import SupervisorPage from '../Pages/SupervisorTracker/SupervisorPage'

function Routing() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/supervisor" element={<SupervisorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routing;

