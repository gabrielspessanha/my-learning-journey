import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import AdminHome from "./pages/admin/AdminHome";
import RootLayoute from "./pages/RootLayoute";



const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayoute />,
        children: [{
            index: true,
            element: <Home />

        },{
            path: "/product",
            element: <Products />
        },
        {
            path: "/cart",
            element: <Cart />
        }
        ]
    },
    {
        path: "/admin",
        element: <AdminHome />
    }
])

export default router