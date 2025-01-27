const AdminPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-blue-600 text-white py-4 px-6 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Profile</a>
            <a href="#" className="hover:underline">Logout</a>
          </div>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-6">
          <h2 className="text-lg font-semibold mb-6">Admin Features</h2>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-700 hover:text-blue-600">Dashboard</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600">Manage Products</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600">Manage Users</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600">Orders</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600">Reports</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-8">
          <h2 className="text-2xl font-bold mb-4">Welcome, Admin!</h2>
          <p className="text-gray-600 mb-6">
            Use the features on the left to manage the platform. Select an option to view more details.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Total Products</h3>
              <p className="text-2xl font-bold text-blue-600">120</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Total Users</h3>
              <p className="text-2xl font-bold text-blue-600">350</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Pending Orders</h3>
              <p className="text-2xl font-bold text-blue-600">45</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
