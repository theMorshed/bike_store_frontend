import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="text-blue-600 p-4 font-bold">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-blue-600 text-2xl font-bold">BikeStore</div>
                
                {/* Desktop Menu */}
                <ul className="hidden sm:flex space-x-8">
                    <li><a href="#" className="hover:text-blue-500">Home</a></li>
                    <li><a href="#" className="hover:text-blue-500">Products</a></li>
                    <li><a href="#" className="hover:text-blue-500">About</a></li>
                    <li><a href="#" className="hover:text-blue-500">Contact</a></li>
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
