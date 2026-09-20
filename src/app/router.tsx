import { createBrowserRouter } from "react-router-dom";
import Login from  "../components/login/login"

const routes = createBrowserRouter([{path : "/login", element: <Login />,}])

export default routes