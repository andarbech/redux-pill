import http from "../services/httpService";
import client from "./client";

const getProperties = async (query, baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/properties?${query}`);
}

const getAllProperties = async (baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/properties`);
}

const getProperty = async (id, baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/properties/${id}`);
}

const getPropertiesByCity = (city = "", baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/properties?province=${city}`);
};

const getPropertiesByFilter = (query, baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/properties?${query}`);
};

const propertiesApi = {
  getAllProperties,
  getProperties,
  getProperty,
  getPropertiesByCity,
  getPropertiesByFilter,
};

export default propertiesApi;
