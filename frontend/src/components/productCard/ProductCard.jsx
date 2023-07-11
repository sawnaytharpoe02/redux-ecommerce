import React from 'react';
import { Card, Rate, Button } from 'antd';
import { BsCartPlus } from 'react-icons/bs';
import './productCard.scss';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product?.id}`}>
      <Card
        hoverable
        className="card"
        cover={
          <img
            alt={product.title}
            src={product.image}
            className="product_img"
          />
        }>
        <Meta
          title={product.title}
          description={
            product.description.length > 20
              ? product.description.split(' ').slice(0, 8).join(' ') + ' ...'
              : product.description
          }
        />
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
          <Button type="primary" icon={<BsCartPlus />}>
            Add to cart
          </Button>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
