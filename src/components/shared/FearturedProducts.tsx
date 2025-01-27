import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import featuredBike from '../../assets/images/bike_image_featured.png'

const FearturedProducts = () => {
    return (
        <section className="py-30 bg-gray-100">            
            <div className="container mx-auto px-4">
                <h3 className="text-4xl font-bold text-center mb-20">Featured Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((product) => (
                        <motion.div
                            key={product}
                            className="bg-white p-4 shadow rounded-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={featuredBike}
                                alt={`Bike ${product}`}
                                className="w-full h-60 object-cover rounded-md mb-4"
                            />
                            <h4 className="text-xl font-semibold mb-2">Bike Model {product}</h4>
                            <p className="text-gray-600 mb-4">High-quality bike for all terrains.</p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition duration-300"><Link to="/single-product">View Details</Link></button>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition duration-300 ml-2">Add to Cart</button>
                        </motion.div>
                    ))}
                </div>
                <div className="flex items-center justify-center pt-15">
                    <Link to="/products" className="inline-block bg-blue-600 text-white py-3 px-8 rounded-xl text-lg font-semibold hover:bg-blue-700 transition duration-300">All Products</Link>
                </div>
            </div>
        </section>
    );
};

export default FearturedProducts;
