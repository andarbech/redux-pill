import propertiesApi from "../../api/properties";

import { LOGGED_USER, CREATE_NEW_USER } from "./types";

export const setLoginUser = (value) => ({
  type: LOGGED_USER,
  payload: {
    token: value.token,
    name: value.name,
    email: value.email,
  },
});

export const register = (newUser) => {
  return async (dispatch) => {
    const { data } = await propertiesApi.createNewUser(newUser);

    if (data.message === "User created successfully.") {
      dispatch(setLoginUser(data.data));
    }
  };
};

export const sendData = (userData) => ({
  action: LOGGED_USER,
  payload: {
    email: userData.email,
    password: userData.password,
  },
});
