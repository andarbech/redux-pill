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

export const setRadioFilters = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_RADIO_FILTERS,
      payload: data
    });
  };
};

export const setRadioFiltersMiddleware = (dataFilter) => {

  if (dataFilter.filter.length <= 0) {
    const query = `${dataFilter.name}=${dataFilter.value}`

    return async (dispatch) => {
      dispatch(loadingProperties());
      const { data } = await propertiesApi.getPropertiesByFilter(query);

      dispatch(setRadioFilters(data));
    }
  } else {
    // const query = `${dataFilter.name}=${dataFilter.value}`
    return (dispatch) => {
      dispatch(loadingProperties());

      const data = []

      dataFilter.filter.forEach(property => {

        if (dataFilter.value == property[`${dataFilter.name}`]) {
          data.push(property)
        }
      });
      dispatch(setRadioFilters(data));
    }
  }


}

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

export const register = (newUser) => {
  return async (dispatch) => {
    const data= await propertiesApi.createNewUser(newUser);
    dispatch(console.log(data))
  }
};

/* export const register = (newUser) => {
  console.log(newUser)
  return async (dispatch) => {
    try {
      await $.ajax({
        url: "http://localhost:8100/api/register",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(newUser),
        success: (res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          dispatch({ type: REGISTER, payload: res.data });
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
}; */