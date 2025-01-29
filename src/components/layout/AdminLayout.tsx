import { Link, Outlet } from "react-router-dom";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useSelector } from "react-redux";

const AdminLayout = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = () => {
    dispatch(logout());
  }
  const user = useSelector(selectCurrentUser);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-amber-600 text-white py-4 px-6 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Profile</a>
            <Link to="/login" onClick={handleSubmit} className="hover:underline">Logout</Link>
          </div>
        </div>
      </nav>

      <div className="flex flex-1">
        {(user?.role === 'admin') ? (
            <>                     
              {/* Sidebar */}
              <aside className="w-64 bg-white shadow-md p-6">
                <h2 className="text-lg font-semibold mb-6">Admin Features</h2>
                <ul className="space-y-4">
                  <li><Link className="text-gray-700 hover:text-amber-600" to="/admin">Dashboard</Link></li>
                  <li><Link className="text-gray-700 hover:text-amber-600" to="/admin/orders">Manage Orders</Link></li>
                  <li><Link className="text-gray-700 hover:text-amber-600" to="/admin/users">Manage Users</Link></li>
                  <li><Link className="text-gray-700 hover:text-amber-600" to="/admin/products">Manage Products</Link></li>
                </ul>
              </aside>
            </>
        ) : (
            // If the user is not logged in, show Login and Register buttons
            <>
              {/* Sidebar */}
              <aside className="w-64 bg-white shadow-md p-6">
                <h2 className="text-lg font-semibold mb-6">Customer Features</h2>
                <ul className="space-y-4">
                  <li><Link className="text-gray-700 hover:text-amber-600" to="/customer">Dashboard</Link></li>
                  <li><Link className="text-gray-700 hover:text-amber-600" to="/customer/orders">My Orders</Link></li>
                </ul>
              </aside>
            </>
        )}


        {/* Main Content */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
