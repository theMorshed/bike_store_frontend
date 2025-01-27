import { Link } from 'react-router-dom';
import { useGetAllProductsQuery } from '../redux/features/product/productManagementApi';
import { TProduct } from '../types/product.type';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

// Define the type for query arguments
type TQueryParam = { name: string; value: string };

const ProductsPage = () => {
  // State for search and category filters
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  // State for triggering API queries
  const [queryArgs, setQueryArgs] = useState<TQueryParam[]>([]);

  // Fetch products with the current filters
  const { data: allProducts, isLoading, isError, isSuccess } = useGetAllProductsQuery(queryArgs);

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
      toast.success("All products loaded successfully");
    }

    // Handle error state
    if (isError) {
      toast.error("Failed to load all products. Please try again later.");
    }

    // Cleanup function to dismiss the loading toast if the component unmounts
    return () => {
      if (loadingToastId.current) {
        toast.dismiss(loadingToastId.current);
      }
    };
  }, [isLoading, isError, isSuccess]);

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filters = [];

    if (searchTerm) {
      filters.push({ name: "search", value: searchTerm });
    }

    if (category !== "all") {
      filters.push({ name: "category", value: category });
    }

    setQueryArgs(filters);
  };

    
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-6 pt-10 pb-30">
      {/* Filters Section */}
      <aside className="w-full md:w-2/4 lg:w-1/4 bg-gray-100 p-4 rounded-lg pt-10">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products"
            className="w-full p-2 border rounded mb-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full p-2 border rounded mb-4"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="Mountain">Mountain Bikes</option>
            <option value="Road">Road Bikes</option>
            <option value="Featured">Featured</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Apply Filters
          </button>
        </form>
      </aside>

      <main className="w-full md:w-2/4 lg:w-3/4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {allProducts?.data?.map((product: TProduct) => (
            <div key={product._id} className="bg-white rounded-lg p-4 shadow-md">
              <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-blue-600 font-bold mb-4 text-3xl">${product.price}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition duration-300"><Link to={`/product/${product._id}`}>View Details</Link></button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition duration-300 ml-2">Add to Cart</button>
            </div>
        ))}
      </main>
    </div>
  );
};

export default ProductsPage;
