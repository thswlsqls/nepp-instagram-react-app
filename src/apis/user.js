import { instance } from './index';

// signUp호출시
export const signUp = async (data) => {
  const result = await instance.post('http://localhost:8080/user', data);
  return result.data;
};

// logIn호출시
export const logIn = async (data) => {
  const result = await instance.post('http://localhost:8080/user/token', data);
  return result.data;
};
