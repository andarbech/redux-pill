import React from "react";
import Button from "../Button";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <h2>Here You will find THE best deals on your favorite houses</h2>
      <p>What are you waiting for? </p>
      <p>Click below and search for your dream house</p>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          SEARCH
        </Button>
      </div>
    </div>
  );
}

export default Hero;
