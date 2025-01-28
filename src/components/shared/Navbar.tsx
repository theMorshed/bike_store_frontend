import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectTotalQuantity } from "../../redux/features/cart/cartSlice";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const totalQuantity = useSelector(selectTotalQuantity);

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
                    <Link to="/about" className="hover:text-blue-700">About</Link>                    
                    <Link to="/login" className="hover:text-blue-700">Login</Link>
                    <Link to="/register" className="hover:text-blue-700">Register</Link>
                    {/* Cart Icon */}
                    <Link to="/cart" className="relative">
                    <ShoppingCart size={24} />
                    {totalQuantity > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {totalQuantity}
                        </span>
                    )}
                    </Link>
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
                        <Link to="/" className="block hover:text-blue-700">Home</Link>
                        <Link to="/products" className="block hover:text-blue-700">Products</Link>
                        <Link to="/about" className="block hover:text-blue-700">About</Link>                    
                        <Link to="/login" className="block hover:text-blue-700">Login</Link>
                        <Link to="/register" className="block hover:text-blue-700">Register</Link>
                        {/* Cart Icon */}
                        <Link to="/cart" className="relative">
                        <ShoppingCart size={24} />
                        {totalQuantity > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {totalQuantity}
                            </span>
                        )}
                        </Link>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
