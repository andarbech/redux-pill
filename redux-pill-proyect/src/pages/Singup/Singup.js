import "./stylesR.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import propertiesApi from "api/properties";
import { setLoginUser } from "redux/users/actions";
import { Navigate, NavLink } from "react-router-dom";

const Singup = () => {
  const [newUserData, setNewUserData] = useState({});
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setNewUserData({
      ...newUserData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await propertiesApi.createNewUser(newUserData);
      if (data.success) {
        dispatch(setLoginUser(data.data));
        setIsLoading(false);
      }
    } catch (error) {
      setError("user already exists, please go to login");
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading ? (
        <div className="box">
          <div class="spinner-border text-primary m-auto" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="box">
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          <form className="registerForm" onSubmit={handleSubmit}>
            <div className="field">
              <input
                className="inputField"
                type="email"
                name="email"
                id="email"
                placeholder="Name Surname"
                onChange={handleChange}
                defaultValue=""
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="field">
              <input
                className="inputField"
                type="name"
                name="name"
                id="fullname"
                placeholder="your.email@example.com"
                onChange={handleChange}
                defaultValue=""
              />
              <label htmlFor="fullname">Name</label>
            </div>
            <div className="field">
              <input
                className="inputField"
                type="password"
                name="password"
                id="pass"
                placeholder="password"
                onChange={handleChange}
                defaultValue=""
              />
              <label htmlFor="pass">Password</label>
            </div>
            <div className="field">
              <input
                className="inputField"
                type="password"
                name="confirm_password"
                id="confirm_pass"
                placeholder="confirm password"
                onChange={handleChange}
                defaultValue=""
              />
              <label htmlFor="confirm_pass">Confirm Password</label>
            </div>
            {error && (
              <div class="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <button
              className="w-50 btn btn-lg btn-outline-warning"
              type="submit"
            >
              singUp
            </button>
            <NavLink
              exact
              to="/login"
              style={{ textDecoration: "none" }}
              className="login"
            >
              <button
                className="w-50 btn btn-lg btn-outline-warning"
                type="button"
              >
                Login
              </button>
            </NavLink>
          </form>
        </div>
      )}
    </>
  );
};

export default Singup;
