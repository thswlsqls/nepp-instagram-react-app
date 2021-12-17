import { instance } from './index';

export const getPostListMain = async () => {
  const result = await instance.get('/post/main');
  return result.data;
};

export const addPost = async (params) => {
  const result = await instance.post('/post', params);
  return result.data;
};
