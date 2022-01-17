import http from "../services/httpService";
import client from "./client";

const getProperties = async (baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/properties`);
}

const propertiesApi = {
  getProperties,
};

export default propertiesApi;
