

import "./App.css";
import Footer from "./Components/Pages/Footer";
import Header from './Components/Pages/Header';
import Routing from "./Components/Routing/Routing";
import Supervisor from "./Components/Pages/SupervisorComponent/Supervisor";
// import SupervisorCom from "./Components/Pages/Supervisor/SupervisorCom";
function App() {
    return (
        <>
            <Header/>
            <Routing/>
            <Footer />
            {/* <Outer/> */}
            {/* <Table/> */}
            <Supervisor/>
            
        </>
    )
}
export default App;