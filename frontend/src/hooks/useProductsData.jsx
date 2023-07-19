import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { selectedProduct, setProducts } from '../store/actions/products_action';

const useProductsData = (url, type) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await axios
        .get(url)
        .then((res) => {
          if (type === 'product_detail') {
            return {
              ...res.data,
              quantity: 1,
              unitPrice: res.data.price,
              isAddedInCart: false,
            };
          }
          return res.data.map((row) => ({
            ...row,
            quantity: 1,
            unitPrice: row.price,
            isAddedInCart: false,
          }));
        })
        .catch((err) => console.log(err));
      // await new Promise((resolve) => setTimeout(resolve, 400));

      setIsLoading(false);
      if (type === 'product') {
        dispatch(selectedProduct(response));
        return;
      }

      dispatch(setProducts(response));
    };

    if (url && url !== '') {
      fetchProducts();
    }
  }, [url]);

  return { isLoading };
};

export default useProductsData;
