/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef } from "react";
import { useGetAllProductsQuery } from "../../redux/features/product/productManagementApi";
import { toast } from "sonner";

const ManageProducts = () => {
  const { data: products, isLoading, isSuccess, isError } = useGetAllProductsQuery(undefined); // Fetching products from API

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
      toast.success("Products loaded successfully");
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

  return (
    <div className="container mx-auto p-6">
      <h3 className="text-2xl font-semibold mb-6">Manage Products</h3>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-amber-600 text-white">
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
                    className="text-amber-600 hover:underline"
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
