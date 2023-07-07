import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../components/productCard/ProductCard';
import { v4 as uuidv4 } from 'uuid';
import Loading from '../../components/loading/Loading';
import useProductsData from '../../hooks/useProductsData';

const Home = () => {
  const url = 'https://fakestoreapi.com/products';
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

export default Home;
