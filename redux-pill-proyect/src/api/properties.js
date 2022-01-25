import http from "../services/httpService";

const BASE_URL = `http://localhost:5000`;

const getProperties = async (filters) => {
  return http.get(`/properties`, {
    baseURL: BASE_URL,
    params: { ...filters },
  });
}

const getProperty = async (id) => {
  return http.get(`properties/${id}`, {
    baseURL: BASE_URL,
  });
}

const propertiesApi = {
  getProperties,
  getProperty,
};

export default propertiesApi;
