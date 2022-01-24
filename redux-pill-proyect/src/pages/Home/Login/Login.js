import './styleL.css'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const Login = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({});
    const sessionState = useSelector((state) => state.user);
  
    const handleSubmit = (e) => {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value,
      });
    };
    const sendData = (event) => {
      event.preventDefault();
    //   dispatch(login(userData));
    };
    return (<div>
        <div className="text-center" cz-shortcut-listen="true">
            <main className="form-signin">
                <form
                onSubmit={sendData}
                >
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            onChange={handleSubmit}
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
                            onChange={handleSubmit}
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
                        to="/register"
                        style={{ textDecoration: "none" }}
                        className="login"
                    >
                        <button className="w-100 btn btn-lg btn-danger" type="submit">
                            Register
                        </button>
                    </NavLink>
                    <p className="mt-5 mb-3 text-muted">© Haroon,  Pere & Andres</p>
                </form>
            </main>
        </div>
        </div>
    )
}
export default Login;