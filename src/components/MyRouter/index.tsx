import { useRoutes } from "react-router-dom";
import { Tasks } from "../../pages/Tasks/index";
import { AddTask } from "../../pages/AddTask/index";
import { SeeTask } from "../../pages/Task/index";

export const MyRouter: React.FC = () => {
    const routes = useRoutes([
        { path: "/", element: <Tasks /> },
        { path: "/addTask", element: <AddTask /> },
        { path: "/singleTask/:id", element: <SeeTask /> },
        { path: "*", element: <h1>404</h1> },
    ]);
    return routes;
};
