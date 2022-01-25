import "./styleL.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setLoginUser } from "../../redux/users/actions";
import userApi from "api/users";

const Login = () => { 
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const { data } = await userApi.loginUser(userData);
      if (data.success) {
        dispatch(setLoginUser(data.data));
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError("Email or Password Incorrect");
    }
  };

  return (
    <div>
      <div className="text-center" cz-shortcut-listen="true">
        {isLoading ? (
          <div class="spinner-border text-primary m-auto" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <main className="form-signin">
              <form
                onSubmit={handleSubmit}
              >
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
              {error && (
                <div class="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
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
        )}
      </div>
    </div>
  );
};
export default Login;
