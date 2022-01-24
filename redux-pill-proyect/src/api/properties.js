import http from "../services/httpService";

const BASE_URL = `http://localhost:5000`;

const getProperties = async (filter) => {
  const {
    type,
    condition,
    bed,
    bath,
    price_lte,
    price_gte,
    deposit,
    allow_pets,
    has_swimming_pool,
    has_terrace,
    has_garden,
    has_air_conditioning,
    search,
  } = filter;

  return http.get(`/properties`, {
    baseURL: BASE_URL,
    params: {
      type,
      condition,
      bed,
      bath,
      deposit,
      price_lte,
      price_gte,
      allow_pets,
      has_air_conditioning,
      has_garden,
      has_swimming_pool,
      has_terrace,
      q: search,
    },
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
