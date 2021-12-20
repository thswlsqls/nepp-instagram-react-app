import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { ModalAddPost } from "./modal";
import { getMyInfo } from "../../apis/user";

const TopNav = () => {
  const [showModalAddPost, setShowModalAddPost] = useState(false);
  const [myInfo, setMyInfo] = useState({});

  useEffect(() => {
    // IIFE
    (async () => {
      const { user } = await getMyInfo();
      setMyInfo(user);
    })();
  }, []);

  return (
    <>
      <Header>
        <HeaderWrapper>
          <Link to="/">
            <LogoImage src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
          </Link>
          <Nav>
            <BtnAddPost
              onClick={() => setShowModalAddPost(true)}
              src="https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-80-256.png"
            />
            <Link to={`/${myInfo.user_name}`}>profile</Link>
            <Link to="/logout">logout</Link>
          </Nav>
        </HeaderWrapper>
      </Header>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>

      {showModalAddPost && (
        <ModalAddPost onClose={() => setShowModalAddPost(false)} />
      )}
    </>
  );
};

const OutletWrapper = styled.div`
  padding-top: 60px;
`;

const Header = styled.header`
  background: #fff;
  position: fixed;
  top: 0;
  height: 54px;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
`;
const HeaderWrapper = styled.div`
  max-width: 975px;
  height: 100%;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoImage = styled.img`
  width: 104px;
  cursor: pointer;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
const BtnAddPost = styled.img`
  cursor: pointer;
  width: 50px;
`;

export default TopNav;
