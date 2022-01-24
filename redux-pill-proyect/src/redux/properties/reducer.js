import initialState from "./state";

import {
  LOADING_PROPERTIES,
  GET_PROPIERTIES,
  RESET_PROPIERTIES,
} from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPIERTIES: {
      return {
        ...state,
        status: 'success',
        list: action.payload,
      };
    }
    case LOADING_PROPERTIES: {
      return {
        ...state,
        status: "loading",
      };
    }
    case RESET_PROPIERTIES: {
      return {
        ...initialState
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
