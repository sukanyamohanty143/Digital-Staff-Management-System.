

import "./App.css";

import Header from './Components/Pages/Header';
import Routing from "./Components/Routing/Routing";
import SupervisorCom from "./Components/Pages/Supervisor/SupervisorCom";

// import SupervisorPage from "./Components/Pages/SupervisorPage/SupervisorPage";
// import Footer from "./Components/Pages/Footer";
// import SupervisorPage from "./Components/Pages/SupervisorTracker/SupervisorPage";

function App() {
    return (
        <>
            <Header/>
            <Routing/>
            {/* <Footer /> */}
            {/* <Outer/> */}
            {/* <Table/> */}
            <SupervisorCom/>
            
        </>
    )
}
export default App;