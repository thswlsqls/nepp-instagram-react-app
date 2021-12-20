import { instance } from ".";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const result = await instance.post("/upload/image", formData);
  return result.data;
};
