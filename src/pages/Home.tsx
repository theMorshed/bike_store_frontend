import Benefits from "../components/shared/Benefits";
import CustomerReview from "../components/shared/CustomerReview";
import FearturedProducts from "../components/shared/FearturedProducts";
import HeroSection from "../components/shared/HeroSection";

const Home = () => {
    return (
        <div>            
            {/* Banner */}
            <HeroSection />

            {/* Featured Products */}
            <FearturedProducts />

            {/* Section 1: Customer Reviews */}
            <CustomerReview />

            {/* Section 2: Benefits */}
            <Benefits />
        </div>
    );
};

export default Home;