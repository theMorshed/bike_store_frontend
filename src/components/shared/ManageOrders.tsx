/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllOdersQuery } from "../../redux/features/admin/adminApi";

const ManageOrders = () => {
  const { data: orders, isLoading, isError } = useGetAllOdersQuery(undefined); // Fetching orders from API

  if (isLoading) return <p className="text-center text-lg">Loading orders...</p>;
  if (isError) return <p className="text-center text-lg text-red-600">Error loading orders.</p>;

  return (
    <div className="container mx-auto p-6">
      <h3 className="text-2xl font-semibold mb-6">Manage Orders</h3>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-blue-600 text-white">
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
                <td className="px-6 py-4">{order.customer?.name || "N/A"}</td>
                <td className="px-6 py-4">${order.totalPrice.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-white ${
                      order.status === "Pending"
                        ? "bg-yellow-500"
                        : order.status === "Completed"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="text-blue-600 hover:underline"
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
