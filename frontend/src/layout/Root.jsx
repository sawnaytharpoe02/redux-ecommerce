import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { Layout, Button } from 'antd';
import { useSelector } from 'react-redux';
import Auth from '../pages/authPage/Auth';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { BiSolidToTop } from 'react-icons/bi';

const Root = () => {
  const { user } = useSelector((state) => state.auth);
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight * 0.2) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  return user ? (
    <Layout className="layout_bg">
      <Navbar />
      <Outlet />
      <Footer />
      <Button
        type="primary"
        shape="circle"
        size="large"
        onClick={scrollToTop}
        style={{
          fontSize: '1.2rem',
          position: 'fixed',
          bottom: '1.2rem',
          right: '1rem',
          display: showScroll ? 'block' : 'none',
        }}>
        <BiSolidToTop />
      </Button>
    </Layout>
  ) : (
    <Auth path="login" />
  );
};

export default Root;
