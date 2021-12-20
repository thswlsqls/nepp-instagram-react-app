import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../apis/user";

const Signup = () => {
  let navigate = useNavigate();
  const [form, setForm] = useState({ userName: "", password: "", name: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userName, password, passwordConfirm } = form;

    if (userName.length < 5) {
      return alert("아이디는 5글자 이상입니다.");
    }
    if (password !== passwordConfirm) {
      return alert("비밀번호를 확인하세요");
    }

    const { success } = await signUp(form);
    if (success) {
      alert("가입 성공");
      navigate("/login");
    } else {
      alert("중복되는 아이디가 존재합니다.");
    }
  };
  return (
    <Wrapper>
      <Container>
        <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
        <Message>친구들의 사진과 동영상을 보려면 가입하세요.</Message>
        <Form onSubmit={handleSubmit}>
          <InputText
            placeholder="사용자 이름"
            name="userName"
            onChange={handleChange}
            required
          />
          <InputText
            placeholder="성명"
            name="name"
            onChange={handleChange}
            required
          />
          <InputText
            placeholder="비밀번호"
            name="password"
            onChange={handleChange}
            type="password"
            required
          />
          <InputText
            placeholder="비밀번호 확인"
            name="passwordConfirm"
            onChange={handleChange}
            type="password"
            required
          />
          <BtnLogin>가입</BtnLogin>
        </Form>
      </Container>
      <Container>
        <div>
          계정이 있으신가요? <Link to="/login">로그인</Link>
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
const Message = styled.p`
  font-size: 17px;
  font-weight: 600;
  color: #8e8e8e;
  margin: 0 40px 20px;
  text-align: center;
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

export default Signup;
