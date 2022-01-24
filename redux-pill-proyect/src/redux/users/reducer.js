import initialState from "./state";
import { LOGGED_USER } from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_USER:
      console.log(action.payload);
      return {
        ...state,
        userToken: action.payload.token,
        userName: action.payload.name,
        userEmail: action.payload.email,
      };

    default: {
      return state;
    }
  }
};

export default reducer;
