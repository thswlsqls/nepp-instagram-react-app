import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Main,
  Login,
  Signup,
  Logout,
  UserName,
  AccountEdit,
} from "./components/pages";
import { LoginCheck, TopNav } from "./components/organisms";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginCheck />}>
          <Route path="/" element={<TopNav />}>
            <Route path="/" element={<Main />} />
            <Route path="/:userName" element={<UserName />} />
            <Route path="/account/edit" element={<AccountEdit />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
