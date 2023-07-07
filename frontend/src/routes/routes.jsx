import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import AuthLayout from '../layout/AuthLayout';
import Auth from '../pages/authPage/Auth';
import Home from '../pages/home/Home';
import MenClothing from '../pages/clothing/MenClothing';
import WomenClothing from '../pages/clothing/WomenClothing';
import Electronics from '../pages/others/electronics';
import Jewelery from '../pages/others/Jewelery';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'clothing/',
        children: [
          {
            path: 'men',
            element: <MenClothing />,
          },
          {
            path: 'women',
            element: <WomenClothing />,
          },
        ],
      },
      {
        path: 'others/',
        children: [
          {
            path: 'electronics',
            element: <Electronics />,
          },
          {
            path: 'jewelery',
            element: <Jewelery />,
          },
        ],
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
