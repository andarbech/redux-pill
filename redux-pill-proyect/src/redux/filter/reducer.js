import initialState from "./state";
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILTERED_PROPERTIES: {
      // console.log(action.payload);

      return {
        ...state,
        properties: {
          ...state.properties,
          properties: action.payload,
        },
      };
    }

    case GET_PROPIERTIES: {
      return {
        ...state,
        properties: {
          ...state.properties,
          properties: action.payload,
        },
      };
    }
    case SET_SELECT_FILTERS:
    case SET_RADIO_FILTERS: {
      console.log(action.payload);

      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };
    }
    case SET_CHECKBOX_FILTERS: {
      console.log(action.payload);

      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: {
            ...state.filters[action.payload.name],
            [action.payload.value]: action.payload.checked,
          },
        },
      };
    }
    case LOADING_PROPERTIES: {
      return {
        ...state,
        status: "loading",
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
