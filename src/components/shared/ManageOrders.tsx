/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { useGetAllOdersQuery } from "../../redux/features/admin/adminApi";
import { toast } from "sonner";

const ManageOrders = () => {
  const { data: orders, isLoading, isSuccess, isError } = useGetAllOdersQuery(undefined); // Fetching orders from API

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
      toast.success("Orders loaded successfully");
    }

    // Handle error state
    if (isError) {
      toast.error("Failed to load all orders. Please try again later.");
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
      <h3 className="text-2xl font-semibold mb-6">Manage Orders</h3>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-amber-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Order ID</th>
              <th className="px-6 py-3 text-left">Customer</th>
              <th className="px-6 py-3 text-left">Total Price</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders?.data?.map((order: any) => (       
              <tr key={order._id} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4">{order._id}</td>
                <td className="px-6 py-4">{order.user.name || "N/A"}</td>
                <td className="px-6 py-4">${order.totalPrice.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-white ${
                      order.status === "Pending"
                        ? "bg-red-500"
                        : order.status === "Completed"
                        ? "bg-amber-500"
                        : "bg-amber-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="text-amber-600 hover:underline"
                    onClick={() => handleViewOrder(order._id)}
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

// Handle order view (optional)
const handleViewOrder = (orderId: string) => {
  // Logic to navigate or show order details modal
  console.log(`View details for order: ${orderId}`);
};

export default ManageOrders;
