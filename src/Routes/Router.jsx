import { createBrowserRouter } from "react-router";
import Home from "../Components/Home";
import ErrorPage from "../Components/ErrorPage";
import Root from "../LayOuts/Root";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ]
    },
    {
        path: "/*",
        element: <ErrorPage />
    },
]);
export default router;