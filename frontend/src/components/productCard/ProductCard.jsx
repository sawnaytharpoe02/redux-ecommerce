import React from 'react';
import { Card, Rate, Button } from 'antd';
import { BsCartPlus } from 'react-icons/bs';
import './productCard.scss';

const { Meta } = Card;
const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <Card
      hoverable
      className="card"
      cover={
        <img alt={product.title} src={product.image} className="product_img" />
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
        <p>${product.price}</p>
        <Button type="primary" icon={<BsCartPlus />}>
          Add to cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
