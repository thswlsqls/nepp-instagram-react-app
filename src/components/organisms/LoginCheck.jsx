import React, { useContext, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/user';

export const LoginCheck = () => {
  const { isLogin } = useContext(UserContext);
  //   const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, [isLogin, navigate]);

  return <Outlet />;
};

export default LoginCheck;
