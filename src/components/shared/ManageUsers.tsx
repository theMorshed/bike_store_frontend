/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllUsersQuery } from "../../redux/features/admin/adminApi";

const ManageUsers = () => {
  const { data: users, isLoading, isError } = useGetAllUsersQuery(undefined); // Fetching users from API

  if (isLoading) return <p className="text-center text-lg">Loading users...</p>;
  if (isError) return <p className="text-center text-lg text-red-600">Error loading users.</p>;

  return (
    <div className="container mx-auto p-6">
      <h3 className="text-2xl font-semibold mb-6">Manage Users</h3>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-amber-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">User ID</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.data?.map((user: any) => (
              <tr key={user._id} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4">{user._id}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.isBlocked ? "bg-green-500 text-white" : "bg-amber-600 text-white"
                    }`}
                  >
                    {user.isBlocked ? "Inactive" : "Active"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="text-amber-600 hover:underline"
                    onClick={() => handleViewUser(user._id)}
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

// Handle user view (optional)
const handleViewUser = (userId: string) => {
  // Logic to navigate or show user details modal
  console.log(`View details for user: ${userId}`);
};

export default ManageUsers;
