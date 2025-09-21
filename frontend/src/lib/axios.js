import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-sphere-nsk3.onrender.com/api",
  withCredentials: true,
});




