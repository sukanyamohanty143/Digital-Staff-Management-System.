import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../Pages/Login'
import Staff from '../Pages/Staff'
import Registration from '../Pages/Registration'
import AdminPage from '../Pages/AdminPage/admin'
import SupervisorPage from '../Pages/Supervisor/SuppervisorPage'

function Routing() {


  return (
    <BrowserRouter>
      {/* <NavigationLogic role={role} /> */}
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/supervisor" element={<SupervisorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routing

// function NavigationLogic({ role }) {

//   const navigate = useNavigate();
//     console.log(role,"user role")
//   if (role === 'staff') {
//     navigate('/staff');
//   } else if (role === 'admin') {
//     navigate('/admin');
//   } else if (role === 'supervisor') {
//     navigate('/supervisor');
//   } else {    
//     navigate('/');
//   }

//   return null; 
// }

// export default Routing;
