import axios from "axios";
import { AUTHORIZATION_HEADER, BASE_API_URL } from "../constants/constants";
import { store } from "../store/configureStore";

const secureAxios = axios.create({ baseURL: BASE_API_URL });
secureAxios.interceptors.request.use((config) => {
  config.headers[AUTHORIZATION_HEADER] = `Bearer ${store?.getState()?.authentication?.auth?.token}`;
  return config;
});

export default secureAxios;
