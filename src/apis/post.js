import { instance } from ".";

export const getPostListMain = async () => {
  const result = await instance.get("/post/main");
  return result.data;
};

export const addPost = async (params) => {
  const result = await instance.post("/post", params);
  return result.data;
};

export const getPostList = async (params) => {
  const result = await instance.get("/post", { params });
  return result.data;
};
