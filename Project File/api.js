import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:6001/api/auth"
});

export default API;

