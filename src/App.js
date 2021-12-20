import { useState } from "react";
import Router from "./Router";
import { instance } from "./apis";
import UserContext from "./contexts/user";

function App() {
  const { token } = localStorage;
  if (token) {
    instance.defaults.headers.common["Authorization"] = token;
  }

  const [isLogin, setIsLogin] = useState(!!localStorage.token);
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
