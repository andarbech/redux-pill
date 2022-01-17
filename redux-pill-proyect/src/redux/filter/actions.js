import {
  SET_HOUSE_STATE,
  SET_HOUSE_TYPE,
  SET_NUMBER_OF_BEDROOMS,
  SET_NUMBER_OF_BATHROOMS,
  SET_PRICE_RANGE,
  SET_PUBLICATION_DATE,
  SET_EQUIPMENT,
  SET_ADDITIONAL_FILTERS,
} from "./types";

export const setHouseType = (value) => ({
  type: SET_HOUSE_TYPE,
  payload: value,
});