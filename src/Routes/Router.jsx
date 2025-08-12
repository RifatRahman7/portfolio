import { createBrowserRouter } from "react-router";
import Home from "../Components/Home";
import ProjectDetails from "../Components/ProjectDetails";
import Root from "../LayOuts/Root";
import ErrorPage from "../Components/ErrorPage";
import Project from "../Components/Project";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "projects",
                element: <Project />,
            },
            {
                path: "projects/:id",
                element: <ProjectDetails />,
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

export default router;