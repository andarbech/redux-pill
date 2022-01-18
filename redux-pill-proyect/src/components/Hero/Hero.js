import React, { useState } from "react";
import Button from "../Button";
import "./Hero.css";

function Hero() {
  const [city, setcity] = useState('');
  return (
    <div className="hero-container">
      <h2>Here You will find THE best deals on your favorite houses</h2>
      <p>What are you waiting for? </p>
      <p>Click below and search for your dream house</p>
      <input className="form-control mt-2"
        type="text"
        placeholder="Enter city"
        onChange={(e)=>{setcity(e.target.value)}}
/>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          city={city}
        >
          SEARCH
        </Button>
      </div>
    </div>
  );
}

export default Hero;
