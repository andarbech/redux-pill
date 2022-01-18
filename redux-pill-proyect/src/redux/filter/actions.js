// import getData from '../../services/data';
import propertiesApi  from "../../api/properties";


import {
  SET_HOUSE_STATE,
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
  SET_RADIO_FILTERS,
  SET_CHECKBOX_FILTERS,
  SET_SELECT_FILTERS,
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

export const filterCity = (query) => {
  return async (dispatch) => {
    dispatch(loadingProperties());
    const { data } = await propertiesApi.filterCityProperties(query);
    console.log('cityProperties', data);
    // dispatch(filterProperties(data));
  }
};