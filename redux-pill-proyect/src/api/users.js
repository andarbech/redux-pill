import http from "../services/httpService";

const loginUser = (query) => {
    return http.post(
      `http://localhost:8100/api/login?email=${query.email}&password=${query.password}`
    );
  };

  const createNewUser = (query) => {
    return http.post(
      `http://localhost:8100/api/register?email=${query.email}&name=${query.name}&password=${query.password}&confirm_password=${query.confirm_password}`
    );
  };
const usersApi = {
    loginUser,
    createNewUser
  };
  
  export default usersApi;