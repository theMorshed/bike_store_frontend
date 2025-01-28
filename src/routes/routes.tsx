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
import PrivateRoute from "../pages/admin/PrivateRoute";
import CheckoutPage from "../pages/CheckoutPage";

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
            }
        ]
    },
    {
        path: '/admin',
        element: <PrivateRoute><AdminPage /></PrivateRoute>,
        children: [
            {
                index: true,
                element: <AdminPage />
            }
        ]
    },
    {
        path: '/checkout',
        element: <PrivateRoute><CheckoutPage /></PrivateRoute>
    }
]);

export default router;