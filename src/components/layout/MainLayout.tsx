import Navbar from "../shared/Navbar";
import FearturedProducts from "../shared/FearturedProducts";
import CustomerReview from "../shared/CustomerReview";
import Benefits from "../shared/Benefits";
import Footer from "../shared/Footer";
import HeroSection from "../shared/HeroSection";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Banner */}
            <HeroSection />

            {/* Featured Products */}
            <FearturedProducts />

            {/* Section 1: Customer Reviews */}
            <CustomerReview />

            {/* Section 2: Benefits */}
            <Benefits />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;