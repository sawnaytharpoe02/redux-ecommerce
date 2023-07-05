import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="layout_bg">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
