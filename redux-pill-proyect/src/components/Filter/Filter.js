import { useState } from "react";
import { useDispatch } from "react-redux";
import { RangeSlider, Select, Option } from "@ui5/webcomponents-react";

import { setHouseType } from "../../redux/filter/actions";

import "./styles.css";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <form className="filters_form">
        <div>
          <h5>Type house</h5>
          <div className="typeHouse">
            <div>
              <input
                value="House"
                name="typeHouse"
                type="checkbox"
                id="HouseInput"
                onChange={({ target }) => {
                  dispatch(setHouseType(target.value));
                }}
              />
              <label htmlFor="HouseInput">House</label>
            </div>
            <div>
              <input
                value="Flat"
                name="typeHouse"
                type="checkbox"
                id="flat"
                onChange={({ target }) => {
                  dispatch(setHouseType(target.value));
                }}
              />
              <label htmlFor="flat">Flat/ apartament</label>
            </div>
            <div>
              <input
                value="Penthouse"
                name="typeHouse"
                type="checkbox"
                id="penthouse"
                onChange={({ target }) => {
                  dispatch(setHouseType(target.value));
                }}
              />
              <label htmlFor="penthouse">Penthouse</label>
            </div>
            <div>
              <input
                value="Duplex"
                name="typeHouse"
                type="checkbox"
                id="duplex"
                onChange={({ target }) => {
                  dispatch(setHouseType(target.value));
                }}
              />
              <label htmlFor="duplex">Duplex</label>
            </div>
          </div>
        </div>

        <div>
          <h5>Bedrooms</h5>
          <div className="bedrooms">
            <label className="container">
              <input value="0" name="bedroom" type="checkbox" id="studio"></input>
              <span className="checkmark"> 0+</span>
            </label>

            <label className="container">
              <input value="1" name="bedroom" type="checkbox" id="oneBed"></input>
              <span className="checkmark">1</span>
            </label>

            <label className="container">
              <input value="2" name="bedroom" type="checkbox" id="twoBed"></input>
              <span className="checkmark">2</span>
            </label>

            <label className="container">
              <input value="3" name="bedroom" type="checkbox" id="treeBed"></input>
              <span className="checkmark">3</span>
            </label>

            <label className="container">
              <input
                value="4"
                name="bedroom"
                type="checkbox"
                id="forOrMoreBed"
              ></input>
              <span className="checkmark"> 4+</span>
            </label>
          </div>
        </div>

        <div>
          <h5>Bathrooms</h5>
          <div className="bathrooms">
            <label className="container">
              <input
                value="1"
                name="bathrooms"
                type="checkbox"
                id="oneBath"
              ></input>
              <span className="checkmark">1</span>
            </label>

            <label className="container">
              <input
                value="2"
                name="bathrooms"
                type="checkbox"
                id="twoBath"
              ></input>
              <span className="checkmark">2</span>
            </label>

            <label className="container">
              <input
                value="3"
                name="bathrooms"
                type="checkbox"
                id="threeOrMoreBath"
              ></input>
              <span className="checkmark">3+</span>
            </label>
          </div>
        </div>
        <div>
          <h5>Equip</h5>
          <Select>
            <Option>Equipment 1</Option>
            <Option>Equipment 2</Option>
            <Option>Equipment 3</Option>
            <Option>Equipment 4</Option>
          </Select>
        </div>
        <div>
          <h5>State</h5>
          <div className="houseState">
            <div>
              <input
                value="Needs renovation"
                name="house_State"
                type="checkbox"
                id="Needs_renovation"
              ></input>
              <label htmlFor="Needs_renovation">Needs renovation</label>
            </div>
            <div>
              <input
                value="New house"
                name="house_State"
                type="checkbox"
                id="New_house"
              ></input>
              <label htmlFor="New_house">New House</label>
            </div>
            <div>
              <input
                value="Good condition"
                name="house_State"
                type="checkbox"
                id="Good_condition"
              ></input>
              <label htmlFor="Good_condition">Good condition</label>
            </div>
          </div>
        </div>

        <div>
          <h5>Price Range</h5>
          <RangeSlider
            endValue="150000"
            startValue="500"
            showTooltip="true"
            max="300000"
            min="500"
            step="4.000"
          />
        </div>
        <div>
          <h5>Publication Date</h5>
          <Select>
            <Option>last 48 hours</Option>
            <Option>last 36 hours</Option>
            <Option>last 24 hours</Option>
            <Option>last 12 hours</Option>
          </Select>
        </div>
        <div>
          <h5>More Filters</h5>
          <div className="moreFilters">
            <div>
              <input
                name="petsAllowed"
                type="checkbox"
                id="pets_allowed"
                value="activated"
              ></input>
              <label htmlFor="pets_allowed">Pets allowed</label>
            </div>
            <div>
              <input
                name="airConditioning"
                type="checkbox"
                id="air_conditioning"
                value="activated"
              ></input>
              <label htmlFor="air_conditioning">Air Conditioning</label>
            </div>
            <div>
              <input
                name="terrace"
                type="checkbox"
                id="terrace"
                value="activated"
              ></input>
              <label htmlFor="terrace">Terrace</label>
            </div>
            <div>
              <input
                name="swimingPool"
                type="checkbox"
                id="swiming_pool"
                value="activated"
              ></input>
              <label htmlFor="Good_condition">Swiming pool</label>
            </div>
            <div>
              <input
                name="garden"
                type="checkbox"
                id="garden"
                value="activated"
              ></input>
              <label htmlFor="garden">Garden</label>
            </div>
            <div>
              <input
                name="lift"
                type="checkbox"
                id="lift"
                value="activated"
              ></input>
              <label htmlFor="lift">Lift</label>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Filter;
