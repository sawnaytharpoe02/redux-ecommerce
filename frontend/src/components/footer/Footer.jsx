import React from 'react';
import { Layout } from 'antd';

const Footer = () => {
  const { Footer } = Layout;
  return (
    <Footer style={{ backgroundColor: '#fff', marginTop: 'auto' }}>
      <p style={{ textAlign: 'center' }}>
        Oh!LucyShop &copy;2023. All right reserved.
      </p>
    </Footer>
  );
};

export default Footer;
