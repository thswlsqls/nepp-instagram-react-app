import React from 'react';
import styled from 'styled-components';
import { BasicModal, Backdrop } from '../../atoms';

const AddPost = ({ onClose }) => {
  return (
    <>
      <Modal>
        <Header>
          <h2>새 게시물 만들기</h2>
          <BtnSubmit>공유하기</BtnSubmit>
        </Header>
        <Textarea rows='6' />
        <Label htmlFor='file'>컴퓨터에서 선택</Label>
        <ImageList>
          <ImageItem>
            <Image />
          </ImageItem>
        </ImageList>
        <InputFile id='file' type='file' accept='image/*' />
      </Modal>
      <Backdrop onClick={onClose} />
    </>
  );
};

const Modal = styled(BasicModal)``;
const Header = styled.header`
  position: relative;
`;
const BtnSubmit = styled.span`
  color: #0095f6;
  position: absolute;
  right: 0;
  top: 5px;
  cursor: pointer;
`;
const ImageList = styled.ul``;
const ImageItem = styled.li``;
const Image = styled.img`
  width: 100%;
`;
const Label = styled.label`
  display: inline-block;
  background-color: #0095f6;
  color: #fff;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
`;
const InputFile = styled.input`
  display: none;
`;
const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  margin-top: 10px;
`;

export default AddPost;
