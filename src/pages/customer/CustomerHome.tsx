import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useGetCustomerOrdersQuery } from "../../redux/features/admin/adminApi";

const CustomerHome = () => {
  const { id } = useAppSelector(selectCurrentUser) || {}; // Get user ID from Redux store (if logged in)

  // Fetch orders for current customer (this is always called)
  const { data: orders = [], isLoading } = useGetCustomerOrdersQuery(id || "");
  // Conditionally render based on whether the user is logged in
  if (!id) {
    return <p>Please log in to view your dashboard.</p>;
  }

  if (isLoading) {
    return <p>Loading orders...</p>;
  }

  return (
    <main className="flex-1 bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-4">Welcome, Customer</h2>
      <p className="text-gray-600 mb-6">
        Use the features on the left to manage your orders and account.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
          <p className="text-2xl font-bold text-amber-600">{orders?.data?.length}</p>
        </div>
      </div>
    </main>
  );
};

export default CustomerHome;
