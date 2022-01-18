import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllProperties } from "../../redux/filter/actions";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];
const Button = ({ children, type, onClick, buttonStyle, buttonSize,city }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
const dispatch=useDispatch()
  return (
    <Link to="/results" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={()=>dispatch(getAllProperties(city))}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
