import propertiesApi from "../../api/properties";

import {
  LOADING_PROPERTIES,
  GET_PROPIERTIES,
  RESET_PROPIERTIES,
} from "./types";

export const getProperties = (value) => ({
  type: GET_PROPIERTIES,
  payload: value,
});

export const loadingProperties = () => ({
  type: LOADING_PROPERTIES
})

export const getAllProperties = (query,userToken) => {
  return async (dispatch) => {
    dispatch(loadingProperties());
    const { data } = await propertiesApi.getProperties(query,userToken);
    dispatch(getProperties(data.data));
  }
}

export const resetProperties = () => ({
  type: RESET_PROPIERTIES,
});

