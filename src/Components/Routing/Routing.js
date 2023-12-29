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
import UserTask from '../Pages/UserTask';
import Header from '../Pages/Header'
import Footer from '../Pages/Footer'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function Routing() {
  const navigate = useNavigate();
  const [notificationCount, setNotificationCount] = useState(0);
  const [allNotifications, setAllNotifications] = useState([]);
  const [showSessionTimeout, setShowSessionTimeout] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);



  const resetTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

  //   const newTimeoutId = setTimeout(() => {
  //     console.log("time out" )
  //     timeOut(true);
  //   }, 3000); // 3 days in milliseconds 1000*60*60*24*3

    // setTimeoutId(newTimeoutId);
  };

  const timeOut = (time) => {
    setShowSessionTimeout(time)
  }

  const handleExtendSession = () => {
    resetTimeout();
    setShowSessionTimeout(false);
    // Add any additional logic for extending the session
    // For example, you might want to make an API call to refresh the session on the server
  };

  const handleLogoutFromSessionTimeout = () => {
    handleLogout(); 
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoggedInUser(null);
    navigate('/login');
  };


  useEffect(() => {
  const inactivityTimeout = 1000*60*60*24*3; 

  let timeoutId;

  const handleActivity = () => {

    if (!showSessionTimeout) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        timeOut(true);
      }, inactivityTimeout);

    }
  };

  // Add event listeners for user activity
  window.addEventListener('mousemove', handleActivity);
  window.addEventListener('keydown', handleActivity);

  // Set initial timeout
  handleActivity();

  // Clean up event listeners and clear timeout on component unmount
  return () => {
    window.removeEventListener('mousemove', handleActivity);
    window.removeEventListener('keydown', handleActivity);
    console.log("Clearing timeout", timeoutId);
    clearTimeout(timeoutId);
  };
}, [showSessionTimeout, timeOut]);

  
  return (
    <>
      <Header  {...{notificationCount, allNotifications}}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login {...{ setLoggedInUser, loggedInUser }} />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/staff" element={<Staff {...{handleExtendSession, handleLogoutFromSessionTimeout, showSessionTimeout}}/>} />
        <Route path="/admin" element={<AdminPage {...{handleExtendSession, handleLogoutFromSessionTimeout, showSessionTimeout}}/>} />
        <Route path="/supervisor" element={<Supervisor {...{handleExtendSession, handleLogoutFromSessionTimeout, showSessionTimeout}}/>} />
        <Route path="/outer" element={<Outer/>} />
        <Route path="/profile" element={<Profile {...{setNotificationCount, setAllNotifications}}/>} />
        <Route path="/table" element={<EmployeeTable />} />
        <Route path="/usertask" element={<UserTask/>} />
      </Routes>
      
      <Footer/>
    </>


  );
}
export default Routing;