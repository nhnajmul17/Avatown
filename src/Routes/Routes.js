import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main";
import Item from "../Pages/ItemPage/Item";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,

            },
            {
                path: "/avatardetails/:id",
                element: <Item />,

            },
        ],
    },
]);