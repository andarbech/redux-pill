import propertiesApi from "../../api/properties";

import { LOGGED_USER } from "./types";

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
    try {
      const { data } = await propertiesApi.createNewUser(newUser);
      if (data.message === "User created successfully.") {
        dispatch(setLoginUser(data.data));
      }
    } catch (error) {
      console.log("user already exists, please go to login");

      console.log("Something went wrong!");
    }
  };
};

export const sendData = (userData) => {
  return async (dispatch) => {
    const { data } = await propertiesApi.loginUser(userData);

    console.log(data);

    if (data.message === "User signed in") {
      dispatch(setLoginUser(data.data));
    }
  };
};
