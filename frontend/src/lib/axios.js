import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : " https://chat-sphere-nsk3.onrender.com/api",
  withCredentials: true,
});

