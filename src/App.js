

import "./App.css";

import Header from './Components/Pages/Header';
import Routing from "./Components/Routing/Routing";
import SupervisorCom from "./Components/Pages/Supervisor/SupervisorCom";
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