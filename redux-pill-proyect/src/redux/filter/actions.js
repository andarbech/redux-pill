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
  LOADING_PROPERTIES
} from "./types";

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

export const loadingProperties = (value) => ({
  type: LOADING_PROPERTIES
});

export const getAllProperties = () => {
  console.log('yes')
  return async (dispatch) => {
    dispatch(loadingProperties());
    const { data } = await propertiesApi.getProperties();
    console.log(data);
    dispatch(getFilteredProperties(data));
  }
}