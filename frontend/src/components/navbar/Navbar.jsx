import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Menu, Button, Row, Col, Drawer, Space, Tooltip } from 'antd';
import { logoutUser } from '../../store/actions';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { navItems } from './navItem';
import { BsShop } from 'react-icons/bs';
import { MdAddShoppingCart } from 'react-icons/md';
import { PiShoppingCartLight } from 'react-icons/pi';
import './navbar.scss';

const Navbar = () => {
  const [current, setCurrent] = useState();
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/auth');
  };

  const handleRoute = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <Row
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#fff',
        padding: '1rem',
      }}>
      <Col xs={18} sm={10} md={4} lg={4}>
        <Link
          to="/"
          style={{ color: '#22075e', display: 'flex', alignItems: 'center' }}>
          <BsShop style={{ fontSize: '1.3rem', marginRight: '.4rem' }} />
          <span style={{ fontWeight: 500, fontSize: '1.08rem' }}>
            Oh!LucyShop
          </span>
        </Link>
      </Col>
      <Col xs={0} sm={0} md={0} lg={16}>
        <Menu
          onClick={handleRoute}
          selectedKeys={[current]}
          mode="horizontal"
          items={navItems}
        />
      </Col>
      <Col xs={0} sm={0} md={0} lg={4} className="nav_btn_gps">
        <Tooltip placement="bottom" title={user?.position} trigger="click">
          <Button type="dashed">{user?.username}</Button>
        </Tooltip>
        <Button
          type="primary"
          onClick={showDrawer}
          style={{ margin: '0 .75rem' }}>
          <PiShoppingCartLight style={{ fontSize: '1.2rem' }} />
        </Button>
        <Button type="primary" onClick={handleLogout}>
          Logout
        </Button>
        <Drawer
          title={
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <MdAddShoppingCart
                style={{ fontSize: '1.3rem', marginRight: '.45rem' }}
              />
              Your Shopping Cart
            </span>
          }
          placement="right"
          size="default"
          open={open}
          onClose={onClose}
          extra={
            <Space>
              <Button type="primary" onClick={onClose}>
                Close
              </Button>
            </Space>
          }>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </Col>
      <Col lg={0}>
        <Button icon={<MenuOutlined />}></Button>
      </Col>
    </Row>
  );
};

export default Navbar;
