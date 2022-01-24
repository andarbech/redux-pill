import {
  SET_RADIO_FILTERS,
  SET_CHECKBOX_FILTERS,
  SET_SELECT_FILTERS,
  SET_RANGE_FILTERS,
  SET_MORE_FILTERS,
  SET_SEARCH_FILTERS
} from "./types";

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
