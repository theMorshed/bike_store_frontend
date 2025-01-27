import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Outlet */}
            <Outlet />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;