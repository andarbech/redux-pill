import initialState from "./state";
import {
  SET_RADIO_FILTERS,
  SET_CHECKBOX_FILTERS,
  SET_SELECT_FILTERS,
  SET_RANGE_FILTERS,
  SET_MORE_FILTERS,
  SET_SEARCH_FILTERS,
  LOAD_FILTERS,
  CLEAR_FILTERS
} from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RANGE_FILTERS: {
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.name_lte]: action.payload.value_lte,
          [action.payload.name_gte]: action.payload.value_gte,
        }
      }
    }
    case SET_SELECT_FILTERS:
    case SET_RADIO_FILTERS: {
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.name]: action.payload.value,
        },
      };
    }
    case SET_SEARCH_FILTERS: {
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.name]: action.payload.value,
        },
      };
    }
    case SET_CHECKBOX_FILTERS: {
      const key = action.payload.name;
      const value = action.payload.value;
      if (!(state.list[key] instanceof Array)) state.list[key] = [state.list[key]];
      const index = state.list[key].indexOf(value);

      (index === -1)
        ? state.list[key].push(value)
        : state.list[key].splice(index, 1);

      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.name]: state.list[key],
        },
      };
    }
    case SET_MORE_FILTERS: {
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.value]: action.payload.checked,
        },
      };
    }
    case LOAD_FILTERS: {
      return {
        ...state,
        list: {
          ...state.list,
          ...action.payload
        }
      }
    }
    case CLEAR_FILTERS: {
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
