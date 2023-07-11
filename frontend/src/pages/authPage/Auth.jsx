import React, { useEffect, useState } from 'react';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Card, Space, message } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { apiCall } from '../../services/apiService';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Row, Col } from 'antd';
import { setToken } from '../../utils/storage';
import { authUser } from '../../store/actions';
import { MESSAGE, REGEX, TYPE } from '../../utils/constants';

const { Option } = Select;

const Auth = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const slug = pathname.split('/').pop();

  useEffect(() => {
    if (slug == 'register') {
      setIsLogin(false);
    }
    setIsLogin(true);
  }, []);

  const onFinish = async (values) => {
    try {
      const endpoint = isLogin ? 'login' : 'register';
      const res = await apiCall(endpoint, 'post', values);
      setToken(res.data.accessToken);
      dispatch(authUser(res.data.user));
      navigate('/products');
    } catch (error) {
      message.open({
        type: TYPE.ERROR,
        content: MESSAGE.AUTH_FAILED,
      });
    }
  };

  return (
    <Row
      style={{
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Col xs={20} sm={20} md={15} lg={10}>
        <Card
          title={
            <span style={{ fontSize: '1.2rem' }}>
              {isLogin
                ? 'Oh!LucyShop👾 Login Form'
                : 'Oh!LucyShop👾 Register Form'}
            </span>
          }
          bordered={false}>
          <Form onFinish={onFinish} initialValues={{ position: 'member' }}>
            {!isLogin && (
              <Form.Item
                name="username"
                rules={[{ required: true, message: MESSAGE.USERNAME_REQUIRE }]}>
                <Input prefix={<UserOutlined />} placeholder="User Name" />
              </Form.Item>
            )}
            <Form.Item
              name="email"
              rules={[
                { required: true, message: MESSAGE.EMAIL_REQUIRE },
                { pattern: REGEX.EMAIL, message: MESSAGE.INVALID_EMAIL },
              ]}>
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item name="position" hasFeedback>
              <Select placeholder="Please select a position">
                <Option value="member">Member</Option>
                <Option value="admin" disabled={isLogin ? true : false}>
                  Admin
                </Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: MESSAGE.PASSWORD_REQUIRE },
                { pattern: REGEX.PASSWORD, message: MESSAGE.INVALID_PASSWORD },
              ]}>
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                block
                type="primary"
                htmlType="submit"
                style={{ marginBottom: '8px' }}>
                {isLogin ? 'Login' : 'Register'}
              </Button>
              Or
              {isLogin
                ? " Don't have an account ? "
                : ' Already have an account? '}
              {isLogin ? (
                <Link to="/auth/register">
                  <Space
                    style={{ color: '#531dab', cursor: 'pointer' }}
                    onClick={() => setIsLogin(false)}>
                    Register
                  </Space>
                </Link>
              ) : (
                <Link to="/auth">
                  <Space
                    style={{ color: '#531dab', cursor: 'pointer' }}
                    onClick={() => setIsLogin(true)}>
                    Login
                  </Space>
                </Link>
              )}
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Auth;
