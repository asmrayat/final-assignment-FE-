import { Outlet } from "react-router-dom";
import Navbar from "../Components/SharedComponent/Navbar";
import Footer from "../Components/SharedComponent/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;