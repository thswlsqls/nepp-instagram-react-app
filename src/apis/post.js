import { instance } from './index';

export const getPostListMain = async () => {
  const result = await instance.post('/post/main');
  return result.data;
};
