import "./styleL.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setLoginUser } from "../../redux/users/actions";
import propertiesApi from "api/properties";

const Login = () => {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await propertiesApi.loginUser(userData);
      if (data.sucess) setLoginUser(data.data);
    } catch (error) {
      console.log("Email or Password Incorrect");
    }
  };

  return (
    <div>
      <div className="text-center" cz-shortcut-listen="true">
        <main className="form-signin">
          <form onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                onChange={handleChange}
                defaultValue=""
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                onChange={handleChange}
                defaultValue=""
                name="password"
                placeholder="Password"
              />
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <h5>or</h5>
            <NavLink
              exact
              to="/sign-up"
              style={{ textDecoration: "none" }}
              className="login"
            >
              <button className="w-100 btn btn-lg btn-danger" type="submit">
                Register
              </button>
            </NavLink>
            <p className="mt-5 mb-3 text-muted">© Haroon, Pere & Andres</p>
          </form>
        </main>
      </div>
    </div>
  );
};
export default Login;
