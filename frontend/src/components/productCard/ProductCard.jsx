import React from 'react';
import { Card, Rate, Button } from 'antd';
import { BsCartPlus } from 'react-icons/bs';
import './productCard.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions';

const { Meta } = Card;
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="card_container">
      <Card
        className="card"
        cover={
          <img
            alt={product.title}
            src={product.image}
            className="product_img"
          />
        }>
        <Link to={`/products/${product?.id}`} style={{ cursor: 'pointer' }}>
          <Meta
            title={product.title}
            description={
              product.description.length > 10
                ? product.description.split(' ').slice(0, 5).join(' ') + ' ...'
                : product.description
            }
          />
        </Link>
        <div
          style={{
            margin: '8px 0',
          }}>
          <Rate disabled defaultValue={product.rating.rate} />
          <span>({product.rating.count})</span>
          <p style={{ fontWeight: '600' }}>Price - ${product.price}</p>
        </div>
        <p>{product.isAddedInCart}</p>

        {/* <Button
            type="primary"
            style={{ marginTop: '1.2rem' }}
            block
            icon={<BsCartPlus />}
            onClick={() => handleRemoveFromCart(product.id)}>
            Added
          </Button> */}

        <Button
          type="primary"
          ghost
          style={{ marginTop: '1.2rem' }}
          block
          icon={<BsCartPlus />}
          onClick={handleAddToCart}>
          Add to cart
        </Button>
      </Card>
    </div>
  );
};

export default ProductCard;
