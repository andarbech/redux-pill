import initialState from "./state";
import {
  LOADING_PROPERTIES,
  GET_PROPIERTIES,
  RESET_PROPIERTIES,
  SET_RADIO_FILTERS,
  SET_CHECKBOX_FILTERS,
  SET_SELECT_FILTERS,
  SET_RANGE_FILTERS,
  SET_MORE_FILTERS,
  SET_SEARCH_FILTERS,
} from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPIERTIES: {
      return {
        ...state,
        status: 'ok',
        properties: action.payload,
      };
    }
    case SET_RANGE_FILTERS: {
      console.log(action.payload)
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name_lte]: action.payload.value_lte,
          [action.payload.name_gte]: action.payload.value_gte,
        }
      }
    }
    case SET_SELECT_FILTERS:
    case SET_RADIO_FILTERS: {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };
    }
    case SET_SEARCH_FILTERS: {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };
    }
    case SET_CHECKBOX_FILTERS: {
      const key = action.payload.name;
      const value = action.payload.value;
      const index = state.filters[key].indexOf(value);

      (index === -1)
        ? state.filters[key].push(value)
        : state.filters[key].splice(index, 1);

      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: state.filters[key],
        },
      };
    }
    case SET_MORE_FILTERS: {
      console.log(action.payload.value);
      console.log(action.payload.checked);
      // const key = action.payload.value;
      // const value = action.payload.checked;
      // const index = state.filters[key].indexOf(value);

      // (index === -1)
      //   ? state.filters[key].push(value)
      //   : state.filters[key].splice(index, 1);

      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.value]: action.payload.checked,
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
