import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1985/klu/faculty"
});

export default api;
