import axios from "axios";

export const getPhotoURL = async (photo) => {
  const photoFormData = new FormData();
  photoFormData.append("image", photo);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`,
    photoFormData
  );
  return data?.data?.url;
};
