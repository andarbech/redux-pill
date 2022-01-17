// import getData from '../../services/data';
import propertiesApi from "../../api/properties";

import {
  SET_HOUSE_STATE,
  SET_HOUSE_TYPE,
  SET_NUMBER_OF_BEDROOMS,
  SET_NUMBER_OF_BATHROOMS,
  SET_PRICE_RANGE,
  SET_PUBLICATION_DATE,
  SET_EQUIPMENT,
  SET_ADDITIONAL_FILTERS,
  GET_FILTERED_PROPERTIES,
  LOADING_PROPERTIES,

  GET_PROPIERTIES,
  FILTER_PROPIERTIES,
  CITY_PROPIERTIES,
  RESET_PROPIERTIES,
  SET_FILTERS,
} from "./types";

export const getProperties = (value) => ({
  type: GET_PROPIERTIES,
  payload: value,
});

export const loadingProperties = () => ({
  type: LOADING_PROPERTIES
})

export const getAllProperties = () => {
  return async (dispatch) => {
    dispatch(loadingProperties());
    const { data } = await propertiesApi.getProperties();
    console.log('getAllProperties', data);
    dispatch(getProperties(data));
  }
}

export const setFilters = (value, checked) => {
  return (dispatch) => {
    dispatch({
      type: SET_FILTERS,
      payload: { value, checked },
    });
  };
};

export const filterProperties = (query) => {
  return async (dispatch) => {
    dispatch(loadingProperties());
    const { data } = await propertiesApi.filterProperties(query);
    console.log('filterProperties', data);
    // dispatch(filterProperties(data));
  }
};

export const cityProperties = (value) => ({
  // type: CITY_PROPIERTIES,
  // payload: { value },
});

export const resetProperties = (value) => ({
  // type: RESET_PROPIERTIES,
  // payload: { value },
});

export const setHouseType = (value, checked) => ({
  type: SET_HOUSE_TYPE,
  payload: { value, checked },
});

export const setBedroomsNumber = (value) => ({
  type: SET_NUMBER_OF_BEDROOMS,
  payload: value,
});

export const setBathroomsNumber = (value) => ({
  type: SET_NUMBER_OF_BATHROOMS,
  payload: value,
});

export const getFilteredProperties = (value) => ({
  type: GET_FILTERED_PROPERTIES,
  payload: value,
});

// export const getAllProperties = () => {
//   console.log('yes')
//   return async (dispatch) => {
//     dispatch(loadingProperties());
//     const { data } = await propertiesApi.getProperties();
//     console.log(data);
//     dispatch(getFilteredProperties(data));
//   }
// }