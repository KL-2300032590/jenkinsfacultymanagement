import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:2030/Facultymanagement/klu/faculty"
});

export default api;
