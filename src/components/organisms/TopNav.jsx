import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import ModalAddPost from './modal/AddPost';

export const TopNav = () => {
  const [showModalAddPost, setshowModalAddPost] = useState(false);

  return (
    <>
      <Header>
        <HeaderWrapper>
          <Link to='/'>
            <LogoImage src='https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png' />
          </Link>
          <Nav>
            <BtnAddPost
              onClick={() => setshowModalAddPost(true)}
              src='https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-80-256.png'
            />
            <Link to='/logout'>logout</Link>
          </Nav>
        </HeaderWrapper>
      </Header>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>

      {showModalAddPost && (
        <ModalAddPost onClose={() => setshowModalAddPost(false)} />
      )}
    </>
  );
};

const Header = styled.header`
  background: #fff;
  position: fixed;
  top: 0;
  height: 54px;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
`;
const LogoImage = styled.img`
  width: 104px;
  cursor: pointer;
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
const OutletWrapper = styled.div`
  padding-top: 60px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
const BtnAddPost = styled.img`
  width: 50px;
  cursor: pointer;
`;

export default TopNav;
