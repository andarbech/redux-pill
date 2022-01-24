import propertiesApi from "../../api/properties";

import {
  LOADING_PROPERTIES,
  GET_PROPIERTIES,
  RESET_PROPIERTIES,
  SET_RADIO_FILTERS,
  SET_CHECKBOX_FILTERS,
  SET_SELECT_FILTERS,
  SET_RANGE_FILTERS,
  SET_MORE_FILTERS,
  SET_SEARCH_FILTERS
} from "./types";

export const getProperties = (value) => ({
  type: GET_PROPIERTIES,
  payload: value,
});

export const getPropertiesByCity = (city = "") => {
  return async (dispatch) => {
    dispatch(loadingProperties());
    const { data } = await propertiesApi.getPropertiesByCity(city);
    dispatch(getProperties(data));
  }
}

export const loadingProperties = () => ({
  type: LOADING_PROPERTIES
})

export const getAllProperties = (query) => {
  return async (dispatch) => {
    dispatch(loadingProperties());
    const { data } = await propertiesApi.getProperties(query);
    dispatch(getProperties(data));
  }
}

export const setRadioFilters = dataFilter => {
  return (dispatch) => {
    dispatch({
      type: SET_RADIO_FILTERS,
      payload: dataFilter,
    });
  };
};

export const setSearchFilters = dataFilter => {
  return (dispatch) => {
    dispatch({
      type: SET_SEARCH_FILTERS,
      payload: dataFilter,
    });
  };
};

export const setCheckboxFilters = dataFilter => {
  return (dispatch) => {
    dispatch({
      type: SET_CHECKBOX_FILTERS,
      payload: dataFilter,
    });
  };
};

export const setMoreFilters = dataFilter => {
  return (dispatch) => {
    dispatch({
      type: SET_MORE_FILTERS,
      payload: dataFilter,
    });
  };
};

export const setSelectFilters = dataFilter => {
  return (dispatch) => {
    dispatch({
      type: SET_SELECT_FILTERS,
      payload: dataFilter,
    });
  };
};

export const setRangeFilters = dataFilter => {
  return (dispatch) => {
    dispatch({
      type: SET_RANGE_FILTERS,
      payload: dataFilter,
    });
  };
};

export const resetProperties = (value) => ({
  // type: RESET_PROPIERTIES,
  // payload: { value },
});

