import { useDispatch, useSelector } from "react-redux";
import { RangeSlider, Select, Option } from "@ui5/webcomponents-react";

import {
  setRadioFilters,
  setCheckboxFilters,
  setSelectFilters,
  setRangeFilters,
  setMoreFilters,
} from "../../redux/filter/actions";

import "./styles.css";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeRadio = ({ target }) => {
    dispatch(
      setRadioFilters({
        name: target.name,
        value: target.value,
      })
    );
  };

  const handleChangeCheckbox = ({ target }) => {
    dispatch(
      setCheckboxFilters({
        name: target.name,
        value: target.value,
        checked: target.checked,
      })
    );
  };

  const handleChangeSelect = ({ target }) => {
    dispatch(
      setSelectFilters({
        name: target.name,
        value: target.selectedOption.value,
      })
    );
  };

  const handleChangeMoreCheckbox = ({ target }) => {
    dispatch(
      setMoreFilters({
        name: target.name,
        value: target.value,
        checked: target.checked === true ? true : undefined,
      })
    );
  };

  const handleChangeRangeSilder = ({ target }) => {
    dispatch(setRangeFilters({
      name_lte: 'price_lte',
      name_gte: 'price_gte',
      value_lte: target.endValue,
      value_gte: target.startValue,
    }));
  }

  return (
    <form className="form">
      <div className="filter">
        <h5 className="filter__title">Type of home</h5>
        <div className="typeHouse">
          <div>
            <input
              value="house"
              name="type"
              type="checkbox"
              id="HouseInput"
              onChangeCapture={handleChangeCheckbox}
            />
            <label htmlFor="HouseInput">House</label>
          </div>
          <div>
            <input
              value="flat"
              name="type"
              type="checkbox"
              id="flat"
              onChangeCapture={handleChangeCheckbox}
            />
            <label htmlFor="flat">Flat/apartament</label>
          </div>
          <div>
            <input
              value="penthouse"
              name="type"
              type="checkbox"
              id="penthouse"
              onChangeCapture={handleChangeCheckbox}
            />
            <label htmlFor="penthouse">Penthouse</label>
          </div>
          <div>
            <input
              value="duplex"
              name="type"
              type="checkbox"
              id="duplex"
              onChangeCapture={handleChangeCheckbox}
            />
            <label htmlFor="duplex">Duplex</label>
          </div>
        </div>
      </div>

      <div className="filter">
        <h5 className="filter__title">Bedrooms</h5>
        <div className="bedrooms">
          <label className="container">
            <input
              value="0"
              name="bed"
              type="radio"
              id="studio"
              onChangeCapture={handleChangeRadio}
            />
            <span className="checkmark"> 0+</span>
          </label>

          <label className="container">
            <input
              value="1"
              name="bed"
              type="radio"
              id="oneBed"
              onChangeCapture={handleChangeRadio}
            />
            <span className="checkmark">1</span>
          </label>

          <label className="container">
            <input
              value="2"
              name="bed"
              type="radio"
              id="twoBed"
              onChangeCapture={handleChangeRadio}
            />
            <span className="checkmark">2</span>
          </label>

          <label className="container">
            <input
              value="3"
              name="bed"
              type="radio"
              id="treeBed"
              onChangeCapture={handleChangeRadio}
            />
            <span className="checkmark">3</span>
          </label>

          <label className="container">
            <input
              value="4+"
              name="bed"
              type="radio"
              id="fourOrMoreBed"
              onChangeCapture={handleChangeRadio}
            />
            <span className="checkmark"> 4+</span>
          </label>
        </div>
      </div>

      <div className="filter">
        <h5 className="filter__title">Bathrooms</h5>
        <div className="bathrooms">
          <label className="container">
            <input
              value="1"
              name="bath"
              type="radio"
              id="oneBath"
              onChangeCapture={handleChangeRadio}
            />
            <span className="checkmark">1</span>
          </label>

          <label className="container">
            <input
              value="2"
              name="bath"
              type="radio"
              id="twoBath"
              onChangeCapture={handleChangeRadio}
            />
            <span className="checkmark">2</span>
          </label>

          <label className="container">
            <input
              value="3"
              name="bath"
              type="radio"
              id="threeOrMoreBath"
              onChangeCapture={handleChangeRadio}
            />
            <span className="checkmark">3+</span>
          </label>
        </div>
      </div>

      <div className="filter">
        <h5 className="filter__title">Type of Deposit</h5>
        <Select name="deposit" id="deposit" onChange={handleChangeSelect}>
          <Option selected="selected">Select deposit</Option>
          <Option value="none">None</Option>
          <Option value="one_month">One month</Option>
          <Option value="two_months">Two months</Option>
          <Option value="three_months">Three months</Option>
        </Select>
      </div>

      <div className="filter">
        <h5 className="filter__title">Condition</h5>
        <div className="houseState">
          <div>
            <input
              value="renovation"
              name="condition"
              type="checkbox"
              id="needs_renovation"
              onChangeCapture={handleChangeCheckbox}
            />
            <label htmlFor="needs_renovation">Needs renovation</label>
          </div>
          <div>
            <input
              value="new_house"
              name="condition"
              type="checkbox"
              id="new_house"
              onChangeCapture={handleChangeCheckbox}
            />
            <label htmlFor="new_house">New House</label>
          </div>
          <div>
            <input
              value="good"
              name="condition"
              type="checkbox"
              id="good_condition"
              onChangeCapture={handleChangeCheckbox}
            />
            <label htmlFor="good_condition">Good condition</label>
          </div>
        </div>
      </div>

      <div className="filter">
        <h5 className="filter__title">Price Range</h5>
        <RangeSlider
          className="price"
          endValue="150000"
          startValue="500"
          showTooltip="true"
          max="300000"
          min="500"
          step="4.000"
          onChange={handleChangeRangeSilder}
        />
      </div>

      <div className="filter">
        <h5 className="filter__title">Publication date</h5>
        <Select
          name="publication_date"
          id="publication_date"
          onChange={handleChangeSelect}
        >
          <Option selected="selected">Select Publication Date</Option>
          <Option
            value={new Date(new Date().setHours(new Date().getHours() - 48))}
          >
            last 48 hours
          </Option>
          <Option
            value={new Date(new Date().setHours(new Date().getHours() - 36))}
          >
            last 36 hours
          </Option>
          <Option
            value={new Date(new Date().setHours(new Date().getHours() - 24))}
          >
            last 24 hours
          </Option>
          <Option
            value={new Date(new Date().setHours(new Date().getHours() - 12))}
          >
            last 12 hours
          </Option>
        </Select>
      </div>

      <div className="filter">
        <h5 className="filter__title">More Filters</h5>
        <div className="moreFilters">
          <div>
            <input
              value="allow_pets"
              name="more_filters"
              type="checkbox"
              id="allow_pets"
              onChangeCapture={handleChangeMoreCheckbox}
            />
            <label htmlFor="allow_pets">Pets allowed</label>
          </div>
          <div>
            <input
              value="has_air_conditioning"
              name="more_filters"
              type="checkbox"
              id="has_air_conditioning"
              onChangeCapture={handleChangeMoreCheckbox}
            />
            <label htmlFor="has_air_conditioning">
              Air Conditioning
            </label>
          </div>
          <div>
            <input
              value="has_terrace"
              name="more_filters"
              type="checkbox"
              id="has_terrace"
              onChangeCapture={handleChangeMoreCheckbox}
            />
            <label htmlFor="has_terrace">Terrace</label>
          </div>
          <div>
            <input
              value="has_swimming_pool"
              name="more_filters"
              type="checkbox"
              id="has_swimming_pool"
              onChangeCapture={handleChangeMoreCheckbox}
            />
            <label htmlFor="has_swimming_pool">Swimming pool</label>
          </div>
          <div>
            <input
              value="has_garden"
              name="more_filters"
              type="checkbox"
              id="has_garden"
              onChangeCapture={handleChangeMoreCheckbox}
            />
            <label htmlFor="has_garden">Garden</label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Filter;
