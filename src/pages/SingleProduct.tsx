import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/features/product/productManagementApi";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

const SingleProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, isError, isSuccess } = useGetProductByIdQuery(id!);

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
      toast.success("single product loaded successfully");
    }

    // Handle error state
    if (isError) {
      toast.error("Failed to load single product. Please try again later.");
    }

    // Cleanup function to dismiss the loading toast if the component unmounts
    return () => {
      if (loadingToastId.current) {
        toast.dismiss(loadingToastId.current);
      }
    };
  }, [isLoading, isError, isSuccess]);

  return (
    <div className="bg-gray-50 py-30">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="bg-gray-100 flex items-center justify-center">
            <img
              src={product?.data?.image}
              alt={product?.data?.name}
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product?.data?.name}</h1>
            <p className="text-gray-600 text-lg mb-6">
              {product?.data?.description}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-bold text-amber-600">${product?.data?.price}</span>
              <span className="text-gray-500 line-through">${product?.data?.price}</span>
              <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-medium">20% OFF</span>
            </div>

            <button className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>

            <div className="mt-6 text-gray-600 text-sm">
              <p><strong>Category:</strong> {product?.data?.category}</p>
              <p><strong>Stock:</strong> Available</p>
              <p><strong>SKU:</strong> 12345</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="p-8 border-t">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Details</h2>
          <p className="text-gray-600 leading-relaxed">
            This section can include additional details about the product, such as dimensions, materials, care instructions, warranty information, and any other relevant details that would help the customer make an informed decision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;