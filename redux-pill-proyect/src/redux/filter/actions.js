import propertiesApi from "../../api/properties";

import {
  GET_FILTERED_PROPERTIES,
  LOADING_PROPERTIES,
  GET_PROPIERTIES,
  FILTER_PROPIERTIES,
  CITY_PROPIERTIES,
  RESET_PROPIERTIES,
  SET_RADIO_FILTERS,
  SET_CHECKBOX_FILTERS,
  SET_SELECT_FILTERS,
  SET_RANGE_FILTERS
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
      payload: {
        name: dataFilter.name,
        value: dataFilter.value
      },
    });
  };
};

export const setCheckboxFilters = dataFilter => {
  return (dispatch) => {
    dispatch({
      type: SET_CHECKBOX_FILTERS,
      payload: {
        name: dataFilter.name,
        value: dataFilter.value,
        checked: dataFilter.checked
      },
    });
  };
};

export const setSelectFilters = dataFilter => {
  return (dispatch) => {
    dispatch({
      type: SET_SELECT_FILTERS,
      payload: {
        name: dataFilter.name,
        value: dataFilter.value,
      },
    });
  };
};

export const setRangeFilters = dataFilter => {
  return (dispatch) => {
    dispatch({
      type: SET_RANGE_FILTERS,
      payload: {
        name: dataFilter.name,
        startValue: dataFilter.startValue,
        endValue: dataFilter.endValue,
      },
    });
  };
};

export const cityProperties = (value) => ({
  // type: CITY_PROPIERTIES,
  // payload: { value },
});

export const resetProperties = (value) => ({
  // type: RESET_PROPIERTIES,
  // payload: { value },
});

export const getFilteredProperties = (value) => ({
  type: GET_FILTERED_PROPERTIES,
  payload: value,
});
