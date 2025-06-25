import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import toast from "react-hot-toast";
const axiosInstance = axios.create({
  baseURL: "https://m11-assignment11-server.vercel.app",
});
const useAxiosSecure = () => {
  const { user, logoutUser } = useAuth();

  useEffect(() => {
    if (!user.accessToken) return;
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${user.accessToken}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
          logoutUser()
            .then(() => toast.error("Logout - 401"))
            .catch((error) => console.log(error));
        }
        if (error.response.status === 403) {
          logoutUser()
            .then(() => toast.error("Logout - 403"))
            .catch((error) => console.log(error));
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, logoutUser]);
  return axiosInstance;
};

export default useAxiosSecure;
