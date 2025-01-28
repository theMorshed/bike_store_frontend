import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/features/product/productManagementApi";
import { toast } from "sonner";
import { useEffect, useRef } from "react";
import { addProduct, Product } from "../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const FearturedProducts = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product: Product) => {
        dispatch(addProduct({ product, quantity: 1 }));
    };
    const { data: featuredProducts, isLoading, isError, isSuccess } = useGetAllProductsQuery([
        { name: "category", value: "Featured" },
    ]);
    
    const loadingToastId = useRef<string | undefined | number>(undefined);

    useEffect(() => {
        // Handle loading state
        if (isLoading) {
            if (!loadingToastId.current) {
                loadingToastId.current = toast.loading("Loading...");
            }
            } else {
            // Dismiss loading toast when loading ends
            if (loadingToastId.current) {
                toast.dismiss(loadingToastId.current);
                loadingToastId.current = undefined;
            }
        }

        // Handle success state
        if (isSuccess) {
            toast.success("Featured products loaded successfully");
        }

        // Handle error state
        if (isError) {
            toast.error("Failed to load featured products. Please try again later.");
        }

        // Cleanup function to dismiss the loading toast if the component unmounts
        return () => {
            if (loadingToastId.current) {
                toast.dismiss(loadingToastId.current);
            }
        };
    }, [isLoading, isError, isSuccess]);


    return (
        <section className="py-30 bg-gray-100">            
            <div className="container mx-auto px-4">
                <h3 className="text-4xl font-bold text-center mb-20 text-gray-800">Featured Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredProducts?.data?.slice(0, 4).map((product: Product) => (
                        <motion.div
                            key={product._id}
                            className="bg-white p-4 shadow rounded-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-60 object-cover rounded-md mb-4"
                            />
                            <h4 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h4>
                            <p className="text-gray-600 mb-4">{product.description || "No description available."}</p>
                            <p className="text-amber-600 font-bold mb-4 text-3xl">${product.price}</p>
                            <button className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-xl transition duration-300">
                                <Link to={`/product/${product._id}`}>View Details</Link>
                            </button>
                            <button onClick={() => handleAddToCart(product)} className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-xl transition duration-300 ml-2 cursor-pointer">
                                Add to Cart
                            </button>
                        </motion.div>
                    ))}
                </div>
                <div className="flex items-center justify-center pt-15">
                    <Link to="/products" className="inline-block bg-amber-600 text-white py-3 px-8 rounded-xl text-lg font-semibold hover:bg-amber-700 transition duration-300">All Products</Link>
                </div>
            </div>
        </section>
    );
};

export default FearturedProducts;
