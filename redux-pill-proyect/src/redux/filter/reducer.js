import initialState from "./state";
import {
  SET_HOUSE_STATE,
  SET_NUMBER_OF_BEDROOMS,
  SET_NUMBER_OF_BATHROOMS,
  SET_PRICE_RANGE,
  SET_PUBLICATION_DATE,
  SET_EQUIPMENT,
  SET_ADDITIONAL_FILTERS,
  SET_HOUSE_TYPE,
  GET_FILTERED_PROPERTIES
} from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOUSE_TYPE: {
      return {
        ...state,
        filters: {
          type: {
            ...state.filters.type,
            [action.payload.value]: action.payload.checked,
          }
        }
      };
    }
    case SET_NUMBER_OF_BEDROOMS: {
      console.log(action.payload);

      return {
        ...state,
        filters: {
          ...state.filters.bedrooms,
          bedrooms: action.payload
        }
      };
    }
    case SET_NUMBER_OF_BATHROOMS: {
      return {
        ...state,
        filters: {
          bathrooms: action.payload
        }
      };
    }
    case GET_FILTERED_PROPERTIES: {
      console.log(action.payload);

      return {
        ...state,
        properties: {
          ...state.properties,
          properties: action.payload
        }
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;