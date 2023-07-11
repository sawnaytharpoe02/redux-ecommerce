import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { Button, Card, Tag, Rate, Row, Col } from 'antd';
import useProductsData from '../../hooks/useProductsData';
import { useSelector } from 'react-redux';
import { BsFillCartPlusFill } from 'react-icons/bs';
import DetailProductLoading from '../../components/loading/DetailProductLoading';
import './productDetail.scss';

const { Meta } = Card;
const ProductDetail = () => {
  const navigate = useNavigate();
  let { productId } = useParams();

  const url = `https://fakestoreapi.com/products/${productId}`;
  const { isLoading } = useProductsData(url, 'product');

  const { product } = useSelector((state) => state.products);

  return (
    <div style={{ padding: '2.5rem' }}>
      <Button
        onClick={() => navigate(-1)}
        size="large"
        style={{ marginBottom: '1.4rem' }}>
        To Previous
      </Button>

      {isLoading ? (
        <DetailProductLoading />
      ) : (
        <Row align="center">
          <Col sm={24} md={20} xl={18}>
            <Card>
              <div className="product_card">
                <div className="product_card-img">
                  <img
                    className="img"
                    src={product?.image}
                    alt={product?.title}
                  />
                </div>
                <div className="product_card-item">
                  <h3>{product?.title}</h3>
                  <div className="product_sec_row">
                    <div className="rating-count">
                      <Rate disabled defaultValue={product?.rating.rate} />
                      <span>({product?.rating.count})</span>
                    </div>
                    <div className="price">${product?.price}</div>
                  </div>
                  <Tag color="#531dab">{product?.category.toUpperCase()}</Tag>
                  <p>{product?.description}</p>
                  <Button type="primary" ghost icon={<BsFillCartPlusFill />}>
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductDetail;
