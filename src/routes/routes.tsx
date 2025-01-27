import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Regsiter";
import ProductsPage from "../pages/Products";
import SingleProductPage from "../pages/SingleProduct";
import AdminPage from "../pages/admin/AdminHome";
import AboutPage from "../pages/About";
import CheckoutPage from "../pages/CheckoutPage";
import CartPage from "../pages/CartPage";

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
                path: '/single-product',
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
                path: '/checkout',
                element: <CheckoutPage />
            },
            {
                path: '/cart',
                element: <CartPage />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminPage />,
        children: [
            {
                index: true,
                element: <AdminPage />
            }
        ]
    }
]);

export default router;