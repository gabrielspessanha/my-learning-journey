import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { RootLayoute } from "./pages/RootLayoute";
import { Home } from "./pages/Home";
import { StockPage } from "./pages/StockPage";
import { ItemPage } from "./pages/ItemPage";
import { AllItemsPage } from "./pages/AllItemsPage";
import { NewItemPage } from "./pages/NewItemPage";
import { UpdateItem } from "./components/UpdateItem";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayoute />,
        errorElement: <ErrorPage />,
        children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "/items",
            element: <StockPage />,
            children: [
                {
                    index: true,
                    element: <AllItemsPage />
                },
                {
                    path: ":itemId",
                    element: <ItemPage />,
                },
                {
                    path: ":itemId/update",
                    element: <UpdateItem />
                },
                {
                    path: "items/newitem",
                    element: <NewItemPage/>
                }


            ]
        }


    
    ]
    }
])