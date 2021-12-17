import styled from 'styled-components';

export const BasicModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 10px;
  width: 80vw;
  max-width: 600px;
  height: 90vh;
  min-height: 600px;
  padding: 15px;
  z-index: 10;
  overflow: auto;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.7;
  z-index: 9;
`;
