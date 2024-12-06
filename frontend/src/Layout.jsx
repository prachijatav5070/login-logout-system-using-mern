import { Outlet} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopMenu from "./components/Topmenu";

const Layout=()=>{
    return(

        <>
        <hr size="4" color="red" />
    
        <TopMenu/>
        
        <hr />
        <Outlet/>
        <hr />
         <Footer/>        
        </>
    )
}
export default Layout;