import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import AuthLayout from '../layout/AuthLayout';
import Auth from '../pages/authPage/Auth';
import Home from '../pages/home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: 'auth/',
        element: <Auth path={'login'} />,
        children: [
          {
            path: 'register',
            element: <Auth path={'register'} />,
          },
        ],
      },
    ],
  },
]);

export default router;
