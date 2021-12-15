import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from '../../apis/user';
import { instance } from '../../apis';
import UserContext from '../../contexts/user';

const Login = () => {
  const { isLogin } = useContext(UserContext);
  let navigate = useNavigate();
  const { setIsLogin } = useContext(UserContext);
  const [form, setForm] = useState({ userName: '', password: '' });

  useEffect(() => {
    if (isLogin) {
      alert('이미 로그인 하였습니다.');
      navigate('/');
    }
  }, [isLogin]);

  // 인풋에 사용자가 값을 변경할 때
  const handleChange = (e) => {
    // 각 인풋 태그의 값을 구조분해 할당
    const { name, value } = e.target;
    // 폼 state의 기존 값에 각 name속성의 값에 맞추어 userName과 password값을 수정함
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 서버로 login호출, 즉 http://localhost:8080/user요청함
    const { success, token } = await logIn(form);
    // 로그인 성공시, 로컬 스토리지에 token키와 서버로부터 받은 token값을 저장함
    if (success) {
      localStorage.setItem('token', token);
      // header의 Authorization에 토큰 값을 저장함
      instance.defaults.headers.common['Authorization'] = token;
      setIsLogin(true);
      navigate('/');
    } else {
      alert('잘못된 로그인 정보 입니다.');
    }
  };

  return (
    <Wrapper>
      <Container>
        <Logo src='https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png' />
        <Form onSubmit={handleSubmit}>
          <InputText
            placeholder='전화번호, 사용자 이름 또는 이메일'
            name='userName'
            onChange={handleChange}
            required
          />
          <InputText
            placeholder='비밀번호'
            type='password'
            name='password'
            onChange={handleChange}
            required
          />
          <BtnLogin>로그인</BtnLogin>
        </Form>
      </Container>
      <Container>
        <div>
          계정이 없으신가요? <Link to='/signup'>가입하기</Link>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const Container = styled.div`
  width: 350px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 10px 0;
  & + & {
    margin-top: 20px;
  }
`;
const Logo = styled.img`
  margin: 20px 0;
`;
const Form = styled.form`
  padding: 0 40px;
`;
const InputText = styled.input`
  width: 100%;
  height: 36px;
  background: #fafafa;
  border: 1px solid #dbdbdb;
  margin-bottom: 6px;
  padding: 0 10px;
`;
const BtnLogin = styled.button`
  width: 100%;
  margin: 8px 0;
  color: #fff;
  border-radius: 4px;
  border: none;
  height: 30px;
  background: #0095f6;
  cursor: pointer;
`;

export default Login;
