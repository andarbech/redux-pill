import http from "../services/httpService";
const BASE_URL = `http://localhost:8100/api/`;

const getProperties = async (filters, userToken) => {
  return http.get(`/properties`, {
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${userToken}` },
    params: { ...filters },
  });
}
const getProperty = async (id,userToken) => {
  return http.get(`properties/${id}`,{
    headers: { Authorization: `Bearer ${userToken}` },
    baseURL: BASE_URL,
  });
}


const propertiesApi = {
  getProperties,
  getProperty,
};

export default propertiesApi;
