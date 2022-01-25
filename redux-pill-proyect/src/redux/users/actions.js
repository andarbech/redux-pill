import { LOGGED_USER } from "./types";

export const setLoginUser = (value) => ({
  type: LOGGED_USER,
  payload: {
    token: value.token,
    name: value.name,
    email: value.email,
  },
});


