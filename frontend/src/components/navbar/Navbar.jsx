import React, { useState } from 'react';
import {
  MenuOutlined,
  DeleteOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import {
  Menu,
  Button,
  Row,
  Col,
  Drawer,
  Space,
  Tooltip,
  Avatar,
  Radio,
  Badge,
} from 'antd';
import { deleteCart, logoutUser } from '../../store/actions';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { navItems } from './navItem';
import { BsShop } from 'react-icons/bs';
import { MdAddShoppingCart } from 'react-icons/md';
import { PiShoppingCartLight } from 'react-icons/pi';
import { v4 as uuidv4 } from 'uuid';
import './navbar.scss';

const Navbar = () => {
  const [current, setCurrent] = useState();
  const [openCart, setOpenCart] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.carts);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/auth');
  };

  const handleRoute = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  const handleReduceProduct = () => {};

  const handleIncreaseProdcut = () => {};

  const handleDeleteCart = (id) => {
    dispatch(deleteCart(id));
  };

  return (
    <>
      <Row className="navigation_bar">
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
        <Col xs={0} sm={8} md={6} lg={4} className="nav_btn_gps">
          <Tooltip placement="bottom" title={user?.position} trigger="click">
            <Button type="dashed" className="profile-btn">
              {user?.username}
            </Button>
          </Tooltip>
          <Badge count={items.length}>
            <Button
              type="primary"
              onClick={() => setOpenCart(true)}
              style={{ margin: '0 .75rem' }}>
              <PiShoppingCartLight style={{ fontSize: '1.2rem' }} />
            </Button>
          </Badge>
          <Button type="primary" className="log_out-btn" onClick={handleLogout}>
            Logout
          </Button>
        </Col>
        <Col lg={0}>
          <Button
            icon={<MenuOutlined />}
            onClick={() => setNavOpen(true)}></Button>
          {/* Nav menu drawer */}
          <Drawer
            title={
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <MdAddShoppingCart
                  style={{ fontSize: '1.3rem', marginRight: '.45rem' }}
                />
                Oh!LucyShop
              </span>
            }
            placement="right"
            size="default"
            open={navOpen}
            onClose={() => setNavOpen(false)}
            extra={
              <Space>
                <Button type="primary" onClick={() => setNavOpen(false)}>
                  Close
                </Button>
              </Space>
            }>
            <Row style={{ minWidth: '100%' }}>
              <Col xs={24}>
                <Menu
                  className="respon-screen"
                  style={{
                    width: '100%',
                  }}
                  onClick={handleRoute}
                  selectedKeys={[current]}
                  mode="inline"
                  items={navItems}
                />
              </Col>
            </Row>
          </Drawer>
        </Col>
      </Row>

      {/* Shop Cart Drawer */}
      <Drawer
        title={
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <MdAddShoppingCart
              style={{ fontSize: '1.3rem', marginRight: '.45rem' }}
            />
            Shopping Cart
          </span>
        }
        placement="right"
        size="default"
        open={openCart}
        onClose={() => setOpenCart(false)}
        extra={
          <Space>
            <Button type="primary" onClick={() => setOpenCart(false)}>
              Close
            </Button>
          </Space>
        }>
        <div className="cart_container">
          {items?.map((item) => (
            <div key={uuidv4()} className="cart">
              <div>
                <Avatar
                  src={item?.image}
                  size={100}
                  shape="square"
                  style={{ borderColor: '#eaeaea', padding: '.5rem' }}
                />
              </div>
              <div className="cart-btn-gps">
                <Button
                  type="primary"
                  size="small"
                  shape="circle"
                  onClick={() => handleReduceProduct}>
                  <MinusOutlined />
                </Button>
                <span>1</span>
                <Button
                  type="primary"
                  size="small"
                  shape="circle"
                  onClick={() => handleIncreaseProdcut}>
                  <PlusOutlined />
                </Button>
              </div>
              <div className="cart-action">
                <div className="cart-price">${item.price}</div>
                <p
                  className="delete-cart"
                  onClick={() => handleDeleteCart(item.id)}>
                  Remove
                </p>
              </div>
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
