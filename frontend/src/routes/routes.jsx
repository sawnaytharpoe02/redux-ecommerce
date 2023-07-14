import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import AuthLayout from '../layout/AuthLayout';
import Auth from '../pages/authPage/Auth';
import ProductList from '../pages/productList/ProductList';
import PageNotFound from '../pages/pageNotFound/PageNotFound';
import ProductDetail from '../pages/productDetail/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <ProductList />,
      },
      {
        path: 'products/:productId',
        element: <ProductDetail />,
      },
      {
        path: 'clothing/',
        children: [
          {
            path: 'men',
            element: <ProductList />,
          },
          {
            path: 'women',
            element: <ProductList />,
          },
        ],
      },
      {
        path: 'others/',
        children: [
          {
            path: 'electronics',
            element: <ProductList />,
          },
          {
            path: 'jewelery',
            element: <ProductList />,
          },
        ],
      },
      {
        path: '*',
        element: <PageNotFound />,
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
