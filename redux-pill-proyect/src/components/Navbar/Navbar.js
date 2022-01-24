import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import { Link, useLocation, useHistory } from "react-router-dom";
import {
  Input,
  Icon,
  SuggestionGroupItem,
  SuggestionItem,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/features/InputSuggestions.js";

import { getSearchedPropertiesByCity } from "../../redux/search/action";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const url = useLocation();
  const history = useHistory();
  const handleClick = () => setClick(!click);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchedPropertiesByCity(text));
    history.push({
      pathname: "/filter-page",
    });
    closeMobilMenu();
  };

  const handelChange = (e) => {
    setText(e.target.value);
  };
  const closeMobilMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobilMenu}>
            DreamHouse
            <i className="fas fa-home" />
          </Link>
        </div>
        {url.pathname === "/filter-page" ? null : (
          <form onSubmit={handleSubmit}>
            <Input
              icon={<Icon name="search" onClick={handleSubmit} />}
              className="search-bar"
              placeholder="Search by city..."
              onChange={handelChange}
              showSuggestions
              style={{
                width: "200px",
                zIndex: "999",
              }}
            >
              <SuggestionGroupItem text="Cities" />
              <SuggestionItem
                additionalText="Spain"
                description="Cadiz"
                icon="globe"
                text="El Puerto de Santa María
                "
              />
              <SuggestionItem
                additionalText="Spain"
                description="Barcelona"
                icon="globe"
                text="Premiá de Dalt"
              />
              <SuggestionItem
                additionalText="Spain"
                description="Granada"
                icon="globe"
                text="Salar"
              />
              <SuggestionItem
                additionalText="USA"
                description="Massachusetts "
                icon="globe"
                text="Lancaster"
              />
              <SuggestionItem
                additionalText="USA"
                description="Colorado"
                icon="globe"
                text="Laramie"
              />
            </Input>
          </form>
        )}

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobilMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/filter-page"
              className="nav-links"
              onClick={closeMobilMenu}
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobilMenu}>
              Sign In
            </Link>
          </li>
        </ul>
        {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
      </nav>
    </>
  );
}

export default Navbar;
