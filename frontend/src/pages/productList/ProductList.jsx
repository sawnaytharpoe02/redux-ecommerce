import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import { v4 as uuidv4 } from 'uuid';
import Loading from '../../components/loading/Loading';
import useProductsData from '../../hooks/useProductsData';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import Auth from '../authPage/Auth';

const ProductList = () => {
  const { pathname } = useLocation();
  const routePathName = pathname.split('/').pop();
  const [url, setUrl] = useState('');
  const path = 'https://fakestoreapi.com/products/';

  useEffect(() => {
    const categoryMapping = {
      women: `${path}category/${encodeURIComponent("women's clothing")}`,
      men: `${path}category/${encodeURIComponent("men's clothing")}`,
      electronics: `${path}category/electronics`,
      jewelery: `${path}category/jewelery`,
    };

    const getCategoryUrl = (routePathName) => {
      for (const category in categoryMapping) {
        if (routePathName.includes(category)) {
          return categoryMapping[category];
        }
      }
      return path;
    };

    setUrl(getCategoryUrl(routePathName));
  }, [routePathName]);

  const { isLoading } = useProductsData(url, 'products');
  const { products } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);

  return user ? (
    <div className="products_container" style={{ marginTop: '3.2rem' }}>
      {isLoading ? (
        <Loading />
      ) : (
        products?.map((p) => <ProductCard key={uuidv4()} product={p} />)
      )}
    </div>
  ) : (
    <Auth />
  );
};

export default ProductList;
