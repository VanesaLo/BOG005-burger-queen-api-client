import axios from "axios";

const URLapi = "http://localhost:8080/";

const getToken = () => {
  return localStorage.getItem("token");
};

const getLocalUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const loginUsers = (email, password) => {
  return axios.post(URLapi + "login", {
    email,
    password,
  });
};

const getUsers = async () => {
  return await axios({
    method: "GET",
    url: URLapi + "users",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  });
};

const createUser = async (newUser) => {
  return await axios({
    method: "POST",
    url: URLapi + "users",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    data: {
      email: newUser.email,
      password: newUser.password,
      role: newUser.role,
    },
  });
};

const getProducts = async () => {
  return await axios({
    method: "GET",
    url: URLapi + "products",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  });
};

export { loginUsers, getUsers, getProducts, createUser };
