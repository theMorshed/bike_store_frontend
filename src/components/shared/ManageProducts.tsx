/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetAllProductsQuery } from "../../redux/features/product/productManagementApi";

const ManageProducts = () => {
  const { data: products, isLoading, isError } = useGetAllProductsQuery(undefined); // Fetching products from API

  if (isLoading) return <p className="text-center text-lg">Loading products...</p>;
  if (isError) return <p className="text-center text-lg text-red-600">Error loading products.</p>;

  return (
    <div className="container mx-auto p-6">
      <h3 className="text-2xl font-semibold mb-6">Manage Products</h3>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Product ID</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Price</th>
              <th className="px-6 py-3 text-left">Stock</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.data?.map((product: any) => (
              <tr key={product._id} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4">{product._id}</td>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                <td className="px-6 py-4">{product.quantity}</td>
                <td className="px-6 py-4">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => handleViewProduct(product._id)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Handle product view (optional)
const handleViewProduct = (productId: string) => {
  // Logic to navigate or show product details modal
  console.log(`View details for product: ${productId}`);
};

export default ManageProducts;
