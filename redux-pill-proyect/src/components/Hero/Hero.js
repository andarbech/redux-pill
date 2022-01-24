import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setSearchFilters } from "../../redux/filter/actions";

import "./Hero.css";

function Hero() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [city, setCity] = useState('');

  const handleChangeInput = ({ target }) => {
    setCity(target.value)
  };

  const handleSearchInput = ({ target }) => {
    dispatch(
      setSearchFilters({
        name: 'search',
        value: city,
      })
    );

    navigate("/properties", { replace: true });
  };

  return (
    <div className="hero-container">
      <h2>Here You will find THE best deals on your favorite houses</h2>
      <p>What are you waiting for? </p>
      <p>Click below and search for your dream house</p>
      <input className="form-control mt-2"
        type="text"
        placeholder="Enter city"
        onChange={handleChangeInput}
      />
      <div className="hero-btns">
        <button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={handleSearchInput}
        >
          SEARCH
        </button>
      </div>
    </div>
  );
}

export default Hero;
