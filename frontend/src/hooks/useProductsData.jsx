import { useState, useEffect } from 'react';
import axios from 'axios';

const useProductsData = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const res = await axios.get(url).then((res) => res.data);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsLoading(false);
      setProducts(res);
    };

    fetchProducts();
  }, [url]);

  return { isLoading, products };
};

export default useProductsData;
