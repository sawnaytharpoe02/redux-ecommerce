import React from 'react';
import { Skeleton, Card } from 'antd';
import '../productCard/productCard.scss';

const Loading = () => {
  return (
    <div className="products_container">
      {Array.from({ length: 15 }, (_, i) => i + 1).map((id) => (
        <Card
          key={id}
          className="card"
          cover={
            <Skeleton.Image
              active
              shape="circle"
              style={{
                width: '240px',
                height: '200px',
                borderRadius: '0.5rem',
              }}
            />
          }>
          <div>
            <Skeleton paragraph={{ rows: 3 }} size="small" />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Loading;
