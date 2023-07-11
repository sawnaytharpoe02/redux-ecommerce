import React from 'react';
import { Row, Col, Card, Skeleton } from 'antd';
import '../../pages/productDetail/productDetail.scss';

const DetailProductLoading = () => {
  return (
    <Row align="center">
      <Col xs={24} md={20} xl={18}>
        <Card>
          <div className="product_card">
            <div className="product_card-img">
              <Skeleton.Image
                style={{ height: '400px' }}
                className="img"
                active></Skeleton.Image>
            </div>
            <div className="product_card-item">
              <Skeleton
                active
                paragraph={{
                  rows: 4,
                }}></Skeleton>
              <Skeleton.Button
                active
                size="default"
                shape="buttonShape"
                style={{ width: '140px' }}
              />
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default DetailProductLoading;
