import React, { useState } from 'react';
import { MenuOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Menu,
  Button,
  Row,
  Col,
  Drawer,
  Space,
  Tooltip,
  Avatar,
  Badge,
  Empty,
  Popconfirm,
} from 'antd';
import {
  increaseQuantity,
  decreaseQuantity,
  deleteCart,
  logoutUser,
  setTotalCartPrice,
} from '../../store/actions';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { navItems } from './navItem';
import { BsShop } from 'react-icons/bs';
import { MdAddShoppingCart } from 'react-icons/md';
import { PiShoppingCartLight } from 'react-icons/pi';
import { v4 as uuidv4 } from 'uuid';
import './navbar.scss';
import { useEffect } from 'react';

const Navbar = () => {
  const [current, setCurrent] = useState();
  const [openCart, setOpenCart] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [checkout, setCheckout] = useState(0);

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

  const handleIncreaseProdcut = (id) => {
    dispatch(increaseQuantity(id));
    dispatch(setTotalCartPrice(id));
  };

  const handleDecreaseProduct = (id) => {
    dispatch(decreaseQuantity(id));
    dispatch(setTotalCartPrice(id));
  };

  const handleDeleteCart = (id) => {
    dispatch(deleteCart(id));
  };

  const handleCheckout = () => {
    const result = items?.reduce((a, c) => a + c?.price, 0);
    setCheckout(result);
  };

  useEffect(() => {
    handleCheckout();
  }, [handleIncreaseProdcut, handleDecreaseProduct]);

  return (
    <>
      <Row className="navigation_bar">
        <Col xs={8} sm={10} md={4} lg={4}>
          <Link
            to="/"
            style={{ color: '#22075e', display: 'flex', alignItems: 'center' }}>
            <BsShop style={{ fontSize: '1.3rem', marginRight: '.4rem' }} />
            <span style={{ fontWeight: 500, fontSize: '1.08rem' }}>
              Oh!LucyShop
            </span>
          </Link>
        </Col>
        <Col xs={0} sm={0} md={14} lg={16}>
          <Menu
            onClick={handleRoute}
            selectedKeys={[current]}
            mode="horizontal"
            items={navItems}
          />
        </Col>
        <Col xs={16} sm={14} md={6} lg={4} className="nav_btn_gps">
          <Tooltip
            className="profile_tap"
            placement="bottom"
            title={user?.position}
            trigger="click">
            <Button type="dashed" className="profile-btn">
              {user?.username}
            </Button>
          </Tooltip>
          <Badge count={items?.length}>
            <Button
              type="primary"
              onClick={() => setOpenCart(true)}
              style={{ margin: '0 .75rem' }}>
              <PiShoppingCartLight style={{ fontSize: '1.2rem' }} />
            </Button>
          </Badge>
          <Popconfirm
            placement="bottomRight"
            title="Logout"
            description="Are you sure to logout ?"
            onConfirm={handleLogout}
            okText="Yes"
            cancelText="No">
            <Button type="primary" className="log_out-btn">
              Logout
            </Button>
          </Popconfirm>
          <Button
            className="hamburger_menu"
            type="primary"
            ghost
            icon={<MenuOutlined />}
            onClick={() => setNavOpen(true)}></Button>
        </Col>
      </Row>

      {/* Nav menu drawer */}
      <Drawer
        title={
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <BsShop style={{ fontSize: '1.3rem', marginRight: '.4rem' }} />
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
            <Tooltip
              className="profile_tap"
              placement="bottom"
              title={user?.position}
              trigger="click">
              <Button
                type="dashed"
                className="profile-btn"
                block
                style={{ marginBottom: '1.2rem' }}>
                {user?.username}
              </Button>
            </Tooltip>
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
            <Popconfirm
              placement="bottomRight"
              title="Logout"
              description="Are you sure to logout ?"
              onConfirm={handleLogout}
              okText="Yes"
              cancelText="No">
              <Button
                block
                type="primary"
                className="log_out-btn"
                style={{ marginTop: '1.2rem' }}>
                Logout
              </Button>
            </Popconfirm>
          </Col>
        </Row>
      </Drawer>

      {/* Shop Cart Drawer */}
      <Drawer
        className="cart_drawer"
        title={
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <MdAddShoppingCart
              style={{ fontSize: '1.3rem', marginRight: '.45rem' }}
            />
            <Badge count={items.length} offset={[30, 5]}>
              <p>Shopping Cart</p>
            </Badge>
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
        <div>
          {checkout !== 0 ? (
            <div className="cart_container">
              <div className="cart_body">
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
                        onClick={() => {
                          handleDecreaseProduct(item.id);
                        }}>
                        <MinusOutlined />
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        type="primary"
                        size="small"
                        shape="circle"
                        onClick={() => {
                          handleIncreaseProdcut(item.id);
                        }}>
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
              <div className="cart_footer">
                <Button block type="primary" size="large">
                  Checkout&nbsp; - &nbsp;${checkout?.toFixed(2)}
                </Button>
              </div>
            </div>
          ) : (
            <Empty
              style={{ marginTop: '20vh' }}
              description="No Shopping Cart!"
            />
          )}
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
