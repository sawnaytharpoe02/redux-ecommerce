import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Menu, Button, Row, Col } from 'antd';
import { logoutUser } from '../../store/actions';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { navItems } from './navItem';
import { BsShop } from 'react-icons/bs';
import './navbar.scss';

const Navbar = () => {
  const [current, setCurrent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/auth');
  };

  console.log(user);

  return (
    <Row
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#fff',
        padding: '1rem',
      }}>
      <Col xs={18} sm={10} md={4} lg={3}>
        <Link
          to="/"
          style={{ color: '#22075e', display: 'flex', alignItems: 'center' }}>
          <BsShop style={{ fontSize: '1.3rem', marginRight: '.4rem' }} />
          <span style={{ fontWeight: 500, fontSize: '1.08rem' }}>
            Oh!LucyShop
          </span>
        </Link>
      </Col>
      <Col xs={0} sm={0} md={0} lg={17}>
        <Menu
          onClick={(e) => setCurrent(e.key)}
          selectedKeys={[current]}
          mode="horizontal"
          items={navItems}
        />
      </Col>
      <Col xs={0} sm={0} md={0} lg={4} className="nav_btn_gps">
        <Button type="dashed">{user?.username}</Button>
        <Button
          type="primary"
          onClick={handleLogout}
          style={{ marginLeft: '.75rem' }}>
          Logout
        </Button>
      </Col>
      <Col lg={0}>
        <Button icon={<MenuOutlined />}></Button>
      </Col>
    </Row>
  );
};

export default Navbar;
