import initialState from "./state";
import { LOGGED_USER, CREATE_NEW_USER } from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_USER:
      console.log("login");
      return {
        ...state,
        userToken: action.payload.token,
        userName: action.payload.name,
        userEmail: action.payload.email,
      };

    case CREATE_NEW_USER:
    default: {
      console.log("default");
      return state;
    }
  }
};

export default reducer;
