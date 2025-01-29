import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Regsiter";
import ProductsPage from "../pages/Products";
import SingleProductPage from "../pages/SingleProduct";
import AdminPage from "../pages/admin/AdminHome";
import AboutPage from "../pages/About";
import CartPage from "../pages/CartPage";
import PrivateRoute from "../components/shared/PrivateRoute";
import CheckoutPage from "../pages/CheckoutPage";
import ManageOrders from "../components/shared/ManageOrders";
import AdminLayout from "../components/layout/AdminLayout";
import ManageProducts from "../components/shared/ManageProducts";
import ManageUsers from "../components/shared/ManageUsers";
import CustomerHome from "../pages/customer/CustomerHome";
import ManangeCustomerOrders from "../components/shared/ManageCustomerOrders";
import VerifyOrder from "../pages/VerifyOrder";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/products',
                element: <ProductsPage />
            },
            {
                path: '/product/:id',
                element: <SingleProductPage />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '/cart',
                element: <CartPage />
            },
            {
                path: '/checkout',
                element: <PrivateRoute role="customer"><CheckoutPage /></PrivateRoute>
            }
        ]
    },
    {
        path: '/admin',
        element: <PrivateRoute role="admin"><AdminLayout /></PrivateRoute>,
        children: [
            {
                index: true,
                element: <AdminPage />
            },
            {
                path: 'orders',
                element: <ManageOrders />
            },
            {
                path: 'products',
                element: <ManageProducts />
            },
            {
                path: 'users',
                element: <ManageUsers />
            }
        ]
    },
    {
        path: '/customer',
        element: <PrivateRoute role="customer"><AdminLayout /></PrivateRoute>,
        children: [
            {
                index: true,
                element: <CustomerHome />
            },
            {
                path: 'orders',
                element: <ManangeCustomerOrders />
            },
            {
                path: 'orders/verify',
                element: <VerifyOrder />
            }
        ]
    }
]);

export default router;