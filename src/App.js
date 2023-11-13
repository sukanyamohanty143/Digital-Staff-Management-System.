

import "./App.css";
// import Header from './Components/Pages/Header';
import Routing from "./Components/Routing/Routing";
import Supervisor from "./Components/Pages/SupervisorComponent/Supervisor";
// import SupervisorCom from "./Components/Pages/Supervisor/SupervisorCom";
function App() {
    return (
        <>
            {/* <Header/> */}
            <Routing/>
           
            <Supervisor/>
            
        </>
    )
}
export default App;