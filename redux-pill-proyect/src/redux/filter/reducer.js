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
  GET_FILTERED_PROPERTIES,
  LOADING_PROPERTIES,

  GET_PROPIERTIES,
  FILTER_PROPIERTIES,
  CITY_PROPIERTIES,
  RESET_PROPIERTIES,
  SET_FILTERS,
} from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOUSE_TYPE: {
      return {
        ...state,
        filters: {
          ...state.filters,
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
          ...state.filters,
          bedrooms: action.payload
        }
      };
    }
    case SET_NUMBER_OF_BATHROOMS: {
      return {
        ...state,
        filters: {
          ...state.filters,
          bathrooms: action.payload
        }
      };
    }
    case GET_FILTERED_PROPERTIES: {
      // console.log(action.payload);

      return {
        ...state,
        properties: {
          ...state.properties,
          properties: action.payload
        }
      }
    }

    case GET_PROPIERTIES: 

      console.log(action.payload)
      return {
        ...state,
        properties: 
       action.payload
      }
    
    case SET_FILTERS: {
      console.log('step 3:', state)
      // console.log('step 3:', action.payload);
      // console.log('step 3:', Object.entries(action.payload));
      // console.log('step 3:', Object.keys(action.payload));

      let name = Object.keys(action.payload)[0];
      let value = Object.values(action.payload)[0];
      console.log(action.payload);
      console.log(name, ':', value);

      // if (name == 'bath') {
      //   value = Number(value);
      // }

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        }
      }
    }
    case LOADING_PROPERTIES: {
      return {
        ...state,
        status: 'loading'
      }
    }

    default: {
      return state;
    }
  }
};

export default reducer;