import { useGetAllOdersQuery, useGetAllUsersQuery } from "../../redux/features/admin/adminApi";
import { useGetAllProductsQuery } from "../../redux/features/product/productManagementApi";

const AdminHome = () => {
  // Fetching data for users, products, and orders
  const { data: users, isLoading: usersLoading } = useGetAllUsersQuery(undefined);
  const { data: products, isLoading: productsLoading } = useGetAllProductsQuery(undefined);
  const { data: orders, isLoading: ordersLoading } = useGetAllOdersQuery(undefined);

  if (usersLoading || productsLoading || ordersLoading) {
    return <p>Loading data...</p>;
  }

  return (
    <main className="flex-1 bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-4">Welcome, Admin!</h2>
      <p className="text-gray-600 mb-6">
        Use the features on the left to manage the platform. Select an option to view more details.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Total Products</h3>
          <p className="text-2xl font-bold text-blue-600">{products?.data?.length || 0}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Total Users</h3>
          <p className="text-2xl font-bold text-blue-600">{users?.data?.length || 0}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
          <p className="text-2xl font-bold text-blue-600">{orders?.data?.length || 0}</p>
        </div>
      </div>
    </main>
  );
};

export default AdminHome;
