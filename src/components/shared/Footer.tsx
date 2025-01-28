import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social icons

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-30">
            <div className="container mx-auto px-4">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold text-amber-600">Bike Store</h4>
                        <p className="text-gray-400">
                            Your go-to store for high-quality bikes. We offer a wide range of models for all terrains.
                        </p>
                        <p className="text-gray-400 text-sm">
                            &copy; 2025 Bike Store. All rights reserved.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-gray-400 hover:text-amber-400 transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</a>
                            </li>
                            <li>
                                <a href="/shop" className="text-gray-400 hover:text-amber-400 transition-colors">Shop</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold">Follow Us</h4>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <FaFacebookF className="text-2xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <FaTwitter className="text-2xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <FaLinkedin className="text-2xl" />
                            </a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold">Subscribe to Our Newsletter</h4>
                        <p className="text-gray-300">
                            Stay updated with our latest products and offers. Enter your email below.
                        </p>
                        <form className="flex flex-col space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 w-full text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                            <button type="submit" className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-all duration-300">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="text-center mt-20">
                    <p className="text-gray-400 text-sm">&copy; 2025 Bike Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
