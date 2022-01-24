import { LOGGED_USER } from "./types";

export const setLoginUser = (value) => ({
  type: LOGGED_USER,
  payload: {
    token: value.token,
    name: value.name,
    email: value.email,
  },
});

// export const register = (newUser) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await propertiesApi.createNewUser(newUser);
//       if (data.message === "User created successfully.") {
//         dispatch(setLoginUser(data.data));
//       }
//     } catch (error) {
//       console.log("user already exists, please go to login");

//       console.log("Something went wrong!");
//     }
//   };
// };
