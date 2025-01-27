import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="text-blue-600 p-4 font-bold py-8">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-blue-600 text-2xl font-bold"><Link to="/">BikeStore</Link></div>
                
                {/* Desktop Menu */}
                <ul className="hidden sm:flex space-x-8">
                    <Link to="/" className="hover:text-blue-700">Home</Link>
                    <Link to="/products" className="hover:text-blue-700">Products</Link>
                    <Link to="/" className="hover:text-blue-700">About</Link>                    
                    <Link to="/login" className="hover:text-blue-700">Login</Link>
                    <Link to="/register" className="hover:text-blue-700">Register</Link>
                </ul>

                {/* Mobile Menu Button */}
                <div className="sm:hidden">
                    <button onClick={toggleMenu} className="text-xl">
                        {isMenuOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="sm:hidden text-blue-600 p-4">
                    <ul className="space-y-4">
                        <li><a href="#" className="block hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="block hover:text-blue-500">Products</a></li>
                        <li><a href="#" className="block hover:text-blue-500">About</a></li>
                        <li><a href="#" className="block hover:text-blue-500">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
