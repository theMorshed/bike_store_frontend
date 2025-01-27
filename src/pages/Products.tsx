import { Link } from 'react-router-dom';
import featuredBikeImage from '../../src/assets/images/bike_image_featured.png'
import { useGetAllProductsQuery } from '../redux/features/product/productManagementApi';
import { TProduct } from '../types/product.type';

const ProductsPage = () => {
    const { data: allProducts, isLoading, isError } = useGetAllProductsQuery(undefined);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError || !allProducts) {
        return <p>Failed to load featured products. Please try again later.</p>;
    }
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-6 pt-10 pb-30">
      <aside className="w-full md:w-2/4 lg:w-1/4 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <input
          type="text"
          placeholder="Search products"
          className="w-full p-2 border rounded mb-4"
        />
        <select className="w-full p-2 border rounded">
          <option value="all">All Categories</option>
          <option value="mountain">Mountain Bikes</option>
          <option value="road">Road Bikes</option>
        </select>
      </aside>

      <main className="w-full md:w-2/4 lg:w-3/4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {allProducts?.data?.map((product: TProduct) => (
            <div className="bg-white rounded-lg p-4 shadow-md">
              <img
                  src={featuredBikeImage}
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
