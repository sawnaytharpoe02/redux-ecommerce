import React from 'react';
import { Outlet } from 'react-router';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import Auth from '../pages/authPage/Auth';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Root = () => {
  const { user } = useSelector((state) => state.auth);

  return user ? (
    <Layout className="layout_bg">
      <Navbar />
      <Outlet />
      <Footer />
    </Layout>
  ) : (
    <Auth path="login" />
  );
};

export default Root;
