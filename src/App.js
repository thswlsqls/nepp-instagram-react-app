import { useState } from 'react';
import Router from './Router';
import { instance } from './apis';
import UserContext from './contexts/user';

function App() {
  // 로컬스토리지에 token유무로 로그인 여부를 판단함
  const { token } = localStorage;
  if (token) {
    // 토큰이 있으면, header의 Authorization에 토큰 값을 저장함
    instance.defaults.headers.common['Authorization'] = token;
  }

  // 로컬스토리지에 token값이 있으면 isLogin에 true를, 없으면 false를 저장함
  const [isLogin, setIsLogin] = useState(!!localStorage.token);

  // App컴호넌트에서 IsLogin값을 Provider를 통해 내려줌
  const value = {
    isLogin,
    setIsLogin: (val) => setIsLogin(val),
  };

  return (
    <UserContext.Provider value={value}>
      <Router />
    </UserContext.Provider>
  );
}

export default App;
