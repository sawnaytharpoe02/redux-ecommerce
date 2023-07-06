import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../components/productCard/ProductCard';
import { v4 as uuidv4 } from 'uuid';
import './home.scss';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [products, setProducts] = useState();

  const fetchProducts = async () => {
    const url = 'https://fakestoreapi.com/products';
    const res = await axios.get(url).then((res) => res.data);
    setProducts(res);
  };

  if (user) {
    message.open({
      type: 'success',
      content: 'login successfully',
    });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products_container">
      {products?.map((p) => (
        <ProductCard key={uuidv4()} product={p} />
      ))}
    </div>
  );
};

export default Home;
