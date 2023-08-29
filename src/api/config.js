import axios from "axios";

const domain = 'https://64ecbf55f9b2b70f2bfae41e.mockapi.io';

const config = {
  baseURL: domain,
  timeout: 100000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  params: {},
};

const api = axios.create(config);

export default api;
