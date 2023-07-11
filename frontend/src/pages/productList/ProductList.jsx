import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import { v4 as uuidv4 } from 'uuid';
import Loading from '../../components/loading/Loading';
import useProductsData from '../../hooks/useProductsData';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

const ProductList = () => {
  const { pathname } = useLocation();
  const routePathName = pathname.split('/').pop();
  const [url, setUrl] = useState('');
  const path = 'https://fakestoreapi.com/products/';
  useEffect(() => {
    const categoryMapping = {
      products: 'https://fakestoreapi.com/products/',
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
      return '';
    };

    setUrl(getCategoryUrl(routePathName));
  }, [routePathName]);

  const { isLoading } = useProductsData(url, 'products');
  const { products } = useSelector((state) => state.products);

  return (
    <div className="products_container">
      {isLoading ? (
        <Loading />
      ) : (
        products?.map((p) => <ProductCard key={uuidv4()} product={p} />)
      )}
    </div>
  );
};

export default ProductList;
