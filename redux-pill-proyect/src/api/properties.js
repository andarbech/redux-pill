import http from "../services/httpService";
import client from "./client";

const getProperties = async (baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/properties`);
}

const filterProperties = async (query, baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/properties?${query}`);
}

const propertiesApi = {
  getProperties,
  filterProperties
};

export default propertiesApi;
