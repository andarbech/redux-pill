import http from "../services/httpService";
import client from "./client";

const getProperties = async (baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/properties`);
}

const filterProperties = async (query, baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/properties?${query}`);
}

const filterCityProperties = async (query, baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/properties?province=${query}`);
}


const propertiesApi = {
  getProperties,
  filterProperties,
  filterCityProperties
};

export default propertiesApi;
