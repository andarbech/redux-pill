import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RangeSlider, Select, Option } from "@ui5/webcomponents-react";

import {
  setHouseType,
  setBedroomsNumber,
  setBathroomsNumber,
  getAllProperties,
  setFilters,
  filterProperties
} from "../../redux/filter/actions";

import "./styles.css";

const Filter = () => {
  const dispatch = useDispatch();
  let stateFilters = useSelector((state) => state.filter.filters);

  // const [counterInput, setCounterInput] = useState('');
  // const data = stateFilters;
  // console.log(data);

  const handleSetType = ({ target }) => {
    // dispatch(setHouseType(target.value, target.checked));
    dispatch(setFilters(target.value, target.checked));
  };

  const handleChangeInput = ({ target }) => {
    // console.log(stateFilters, target);

    dispatch(setFilters({
      // ...stateFilters,
      [target.name]: target.value,
    }));
  }

  // const handleChangeInput = ({ target }) => {
  //   console.log(stateFilters, target);

  //   dispatch(setFilters({
  //     ...stateFilters,
  //     [target.name]: {
  //       ...stateFilters[target.name],
  //       [target.value]: target.checked,
  //     }
  //   }));
  // }

  const handleSetBedrooms = ({ target }) => {
    console.log(target.value)
    dispatch(setBedroomsNumber(target.value));
  };

  const handleSetBathrooms = ({ target }) => {
    dispatch(setBathroomsNumber(target.value));
  };

  useEffect(() => {
    // stateFilters = useSelector((state) => state.filter.filters);
    dispatch(getAllProperties());
    // dispatch(filterProperties('bath=3'));
  }, [])

  return (
    <>
      <form className="filters_form">
        <div>
          <h5>Type of home</h5>
          <div className="typeHouse">
            <div>
              <input
                value="house"
                name="type"
                type="radio"
                id="HouseInput"
                onChangeCapture={handleChangeInput}
              />
              <label htmlFor="HouseInput">House</label>
            </div>
            <div>
              <input
                value="flat/apartment"
                name="type"
                type="radio"
                id="flat"
                onChangeCapture={handleChangeInput}
              />
              <label htmlFor="flat">Flat/ apartament</label>
            </div>
            <div>
              <input
                value="penthouse"
                name="type"
                type="radio"
                id="penthouse"
                onChangeCapture={handleChangeInput}
              />
              <label htmlFor="penthouse">Penthouse</label>
            </div>
            <div>
              <input
                value="duplex"
                name="type"
                type="radio"
                id="duplex"
                onChangeCapture={handleChangeInput}
              />
              <label htmlFor="duplex">Duplex</label>
            </div>
          </div>
        </div>

        <div>
          <h5>Bedrooms</h5>
          <div className="bedrooms">
            <label className="container">
              <input
                value="0"
                name="bed"
                type="radio"
                id="studio"
                onChangeCapture={handleChangeInput}
              />
              <span className="checkmark"> 0+</span>
            </label>

            <label className="container">
              <input
                value="1"
                name="bed"
                type="radio"
                id="oneBed"
                onChangeCapture={handleChangeInput}
              />
              <span className="checkmark">1</span>
            </label>

            <label className="container">
              <input
                value="2"
                name="bed"
                type="radio"
                id="twoBed"
                onChangeCapture={handleChangeInput}
              />
              <span className="checkmark">2</span>
            </label>

            <label className="container">
              <input
                value="3"
                name="bed"
                type="radio"
                id="treeBed"
                onChangeCapture={handleChangeInput}
              />
              <span className="checkmark">3</span>
            </label>

            <label className="container">
              <input
                value="4"
                name="bed"
                type="radio"
                id="fourOrMoreBed"
                onChangeCapture={handleChangeInput}
              />
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
                name="bath"
                type="radio"
                id="oneBath"
                onChangeCapture={handleChangeInput}
              />
              <span className="checkmark">1</span>
            </label>

            <label className="container">
              <input
                value="2"
                name="bath"
                type="radio"
                id="twoBath"
                onChangeCapture={handleChangeInput}
              />
              <span className="checkmark">2</span>
            </label>

            <label className="container">
              <input
                value="3"
                name="bath"
                type="radio"
                id="threeOrMoreBath"
                onChangeCapture={handleChangeInput}
              />
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
          <h5>Condition</h5>
          <div className="houseState">
            <div>
              <input
                value="Needs renovation"
                name="house_State"
                type="checkbox"
                id="Needs_renovation"
              />
              <label htmlFor="Needs_renovation">Needs renovation</label>
            </div>
            <div>
              <input
                value="New house"
                name="house_State"
                type="checkbox"
                id="New_house"
              />
              <label htmlFor="New_house">New House</label>
            </div>
            <div>
              <input
                value="Good condition"
                name="house_State"
                type="checkbox"
                id="Good_condition"
              />
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
          <h5>Publication date</h5>
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
