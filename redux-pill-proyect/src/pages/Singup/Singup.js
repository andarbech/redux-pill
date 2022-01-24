import "./stylesR.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import propertiesApi from "api/properties";
import { setLoginUser } from "redux/users/actions";

const Singup = () => {
  const [newUserData, setNewUserData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewUserData({
      ...newUserData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await propertiesApi.createNewUser(newUserData);
      if (data.success) dispatch(setLoginUser(data.data));
    } catch (error) {
      console.log("user already exists, please go to login");
    }
  };
  return (
    <>
      <div className="box">
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
        <img
          className="img"
          // src={loginImg}
          alt=""
          width="50%"
          height="200px"
        />
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
          <button
            className="w-100 btn btn-lg btn-outline-warning"
            type="submit"
          >
            singUp
          </button>
        </form>
      </div>
    </>
  );
};

export default Singup;
