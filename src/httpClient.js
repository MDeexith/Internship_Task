import axios from "axios";
import Cookies from "js-cookie";

export const baseURL = "https://heliverse-backend-vy0s.onrender.com";

export default axios.create({
  withCredentials: true,
  credientials: "same-origin",
  Headers: {
    "Content-type": "application/json",
    "X-CSRFToken": Cookies.get("csrftoken"),
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  },
  baseURL: baseURL
});