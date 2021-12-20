import React, { useContext, useEffect } from "react";
import { instance } from "../../apis";
import UserContext from "../../contexts/user";

const Logout = () => {
  // 1. localStorage의 token 지우기
  // 2. axios instance의 default header Authorization 지우기
  // 3. UserContext의 isLogin false로 만들기

  const { setIsLogin } = useContext(UserContext);

  useEffect(() => {
    localStorage.removeItem("token");
    delete instance.defaults.headers.common["Authorization"];
    setIsLogin(false);
  }, []);

  return <div>logout</div>;
};

export default Logout;
