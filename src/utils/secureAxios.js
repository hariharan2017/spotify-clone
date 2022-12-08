import axios from "axios";
import { AUTHORIZATION_HEADER, BASE_API_URL } from "../constants/constants";
import { accessUrl } from "../helpers/spotify";
import { store } from "../store/configureStore";

const secureAxios = axios.create({ baseURL: BASE_API_URL });
secureAxios.interceptors.request.use((config) => {
  config.headers[AUTHORIZATION_HEADER] = `Bearer ${store?.getState()?.authentication?.auth?.token}`;
  return config;
});

secureAxios.interceptors.response.use(
  function (response) {
    return response;
  }, function (error) {
    if(error?.response?.status === 401) window.location.href = accessUrl;
    return error;
  }
);

export default secureAxios;
