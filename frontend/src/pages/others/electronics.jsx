import React, { useEffect, useState } from 'react';
import Loading from '../../components/loading/Loading';
import ProductCard from '../../components/productCard/ProductCard';
import { v4 as uuidv4 } from 'uuid';
import useProductsData from '../../hooks/useProductsData';

const Electronics = () => {
  const url = 'https://fakestoreapi.com/products/category/electronics';
  const { isLoading, products } = useProductsData(url);

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

export default Electronics;