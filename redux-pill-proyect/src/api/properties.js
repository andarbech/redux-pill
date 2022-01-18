import http from "../services/httpService";
import client from "./client";



const filterProperties = async (query="", baseUrl = client.baseUrl) => {
  return http.get(`${baseUrl}/properties${query? "?province="+query : ""}`);
}



const propertiesApi = {
  filterProperties,
  
};

export default propertiesApi;
