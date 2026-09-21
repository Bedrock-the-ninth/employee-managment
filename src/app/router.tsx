import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/login/index';

const routes = createBrowserRouter([{ path: '/login', element: <Login /> }]);

export default routes;
