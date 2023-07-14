import React from 'react';
import { Card, Rate, Button } from 'antd';
import { BsCartPlus } from 'react-icons/bs';
import './productCard.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/actions';

const { Meta } = Card;
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <Card
      className="card"
      cover={
        <img alt={product.title} src={product.image} className="product_img" />
      }>
      <Link to={`/products/${product?.id}`} style={{ cursor: 'pointer' }}>
        <Meta
          title={product.title}
          description={
            product.description.length > 20
              ? product.description.split(' ').slice(0, 8).join(' ') + ' ...'
              : product.description
          }
        />
      </Link>
      <div style={{ margin: '8px 0' }}>
        <Rate disabled defaultValue={product.rating.rate} />
        <span>({product.rating.count})</span>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifySelf: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <p style={{ fontWeight: '600' }}>${product.price}</p>
        <Button type="primary" icon={<BsCartPlus />} onClick={handleAddToCart}>
          Add to cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
