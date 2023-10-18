
// function Routing(){
//     return(
//         <>
//         <h1>Routing</h1>
//         </>
//     )
// }

// export default Routing;


// import Home from './Component/Home';
import Home from '../Pages/Home';
// import Registration from './Component/Registration';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Link className='home' to="/">Home</Link>
          {/* <Link className='registration' to="/registration">Registration</Link> */}

        </div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {/* <Route path="/registration" element={<Registration/>} /> */}


        </Routes>
      </Router>

    </>
  );
}
export default App;