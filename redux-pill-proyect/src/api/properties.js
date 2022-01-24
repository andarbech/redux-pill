import http from "../services/httpService";
import client from "./client";

const getProperties = async (query, baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/properties?${query}`);
};

const getAllProperties = async (baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/properties`);
};

const getProperty = async (id, baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/properties/${id}`);
};

const getPropertiesByCity = (city = "", baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/properties?province=${city}`);
};

const getPropertiesByFilter = (query, baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/properties?${query}`);
};

const createNewUser = (query) => {
  return http.post(
    `http://localhost:8100/api/register?email=${query.email}&name=${query.name}&password=${query.password}&confirm_password=${query.confirm_password}`
  );
};

const propertiesApi = {
  getAllProperties,
  getProperties,
  getProperty,
  getPropertiesByCity,
  getPropertiesByFilter,
  createNewUser,
};

export default propertiesApi;
