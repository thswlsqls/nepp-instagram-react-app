import { createContext } from 'react';

// 로그인 여부 정보를 트리 전역에서 사용할 수 있도록 context에 저장함
const UserContext = createContext({
  isLogin: false,
  setIsLogin: () => {},
});

export default UserContext;
