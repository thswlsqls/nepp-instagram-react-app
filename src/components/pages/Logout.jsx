import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { instance } from '../../apis';
import UserContext from '../../contexts/user';

const Logout = () => {
  // 1. localStorage의 token 지우기
  // 2. axios instance의 default header Authorization 지우기
  // 3. UserContext의 isLogin false로 만들기
  let navigate = useNavigate();
  // provide한 Context의 UserContext로부터 setIsLogin 함수를 가져옴
  const { setIsLogin } = useContext(UserContext);

  //   로컬스토리지에서 토큰 키값쌍을 제거함
  localStorage.removeItem('token');
  //   header의 Authorization을 삭제함
  delete instance.defaults.headers.common['Authorization'];
  //   IsLogin값을 false로 변경함
  setIsLogin(false);

  // 로그인 페이지로 이동함
  useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return <div>logout</div>;
};

export default Logout;
