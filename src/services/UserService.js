// import axios from "axios";
import axios from "./customize-axios";

const fetchAllUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
};

const postCreateUser = (emai, first_name, last_name) => {
  return axios.post("/api/users", {
    emai,
    first_name,
    last_name,
  });
};

const putUpdateUSer = (id, emai, first_name, last_name) => {
  return axios.put(`/api/users/${id}`, {
    emai,
    first_name,
    last_name,
  });
};

const deleteUser = (id) => {
  return axios.delete(`/api/users/${id}`);
};

const loginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

export { fetchAllUser, postCreateUser, putUpdateUSer, deleteUser, loginApi };
