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
} from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOUSE_TYPE: {
      console.log(action.payload);

      const previousType = state.filters.type;

      return {
        ...state,
        filters: {
          type: [
            ...previousType,
            action.payload
          ]
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;