import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RangeSlider, Select, Option } from "@ui5/webcomponents-react";
import { stringify, parse } from "query-string";

import {
  setRadioFilters,
  setCheckboxFilters,
  setSelectFilters,
  setRangeFilters,
  setMoreFilters,
  loadFilters,
  clearFilters
} from "../../redux/filters/actions";

import "./styles.css";

const FiltersForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isFilterInitialized, setFilterInitialized] = useState(false);
  const { list: filters } = useSelector((state) => state.filters);

  const {
    type,
    condition,
    bed,
    bath,
    price_lte,
    price_gte,
    deposit,
    allow_pets,
    has_swimming_pool,
    has_terrace,
    has_garden,
    has_air_conditioning,
  } = filters;

  useEffect(() => {
    if (!isFilterInitialized) {
      const query = parse(location.search, {})

      dispatch(loadFilters(query));

      setFilterInitialized(true);
    }
  }, [dispatch, isFilterInitialized, location]);

  useEffect(() => {
    const query = stringify(filters);

    navigate(`/properties?${query}`, { replace: true });
  }, [filters, navigate]);

  const handleChangeRadio = ({ target }) => {
    dispatch(
      setRadioFilters({
        name: target.name,
        value: target.value,
      })
    );
  };

  const handleChangeCheckbox = ({ target }) => {
    console.log(target.name)
    console.log(target.value)
    console.log(target.checked)

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
              checked={type && type.includes("house")}
              onChange={handleChangeCheckbox}
            />
            <label htmlFor="HouseInput">House</label>
          </div>
          <div>
            <input
              value="flat"
              name="type"
              type="checkbox"
              id="flat"
              checked={type && type.includes("flat")}
              onChange={handleChangeCheckbox}
            />
            <label htmlFor="flat">Flat/apartament</label>
          </div>
          <div>
            <input
              value="penthouse"
              name="type"
              type="checkbox"
              id="penthouse"
              checked={type && type.includes("penthouse")}
              onChange={handleChangeCheckbox}
            />
            <label htmlFor="penthouse">Penthouse</label>
          </div>
          <div>
            <input
              value="duplex"
              name="type"
              type="checkbox"
              id="duplex"
              checked={type && type.includes("duplex")}
              onChange={handleChangeCheckbox}
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
              checked={bed === '0' ? true : false}
              onChange={handleChangeRadio}
            />
            <span className="checkmark"> 0+</span>
          </label>

          <label className="container">
            <input
              value="1"
              name="bed"
              type="radio"
              id="oneBed"
              checked={bed === '1' ? true : false}
              onChange={handleChangeRadio}
            />
            <span className="checkmark">1</span>
          </label>

          <label className="container">
            <input
              value="2"
              name="bed"
              type="radio"
              id="twoBed"
              checked={bed === '2' ? true : false}
              onChange={handleChangeRadio}
            />
            <span className="checkmark">2</span>
          </label>

          <label className="container">
            <input
              value="3"
              name="bed"
              type="radio"
              id="threeBed"
              checked={bed === '3' ? true : false}
              onChange={handleChangeRadio}
            />
            <span className="checkmark">3</span>
          </label>

          <label className="container">
            <input
              value="4+"
              name="bed"
              type="radio"
              id="fourOrMoreBed"
              checked={bed === '4+' ? true : false}
              onChange={handleChangeRadio}
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
              checked={bath === '1' ? true : false}
              onChange={handleChangeRadio}
            />
            <span className="checkmark">1</span>
          </label>

          <label className="container">
            <input
              value="2"
              name="bath"
              type="radio"
              id="twoBath"
              checked={bath === '2' ? true : false}
              onChange={handleChangeRadio}
            />
            <span className="checkmark">2</span>
          </label>

          <label className="container">
            <input
              value="3"
              name="bath"
              type="radio"
              id="threeOrMoreBath"
              checked={bath === '3+' ? true : false}
              onChange={handleChangeRadio}
            />
            <span className="checkmark">3+</span>
          </label>
        </div>
      </div>

      <div className="filter">
        <h5 className="filter__title">Type of Deposit</h5>
        <Select name="deposit" id="deposit" onChange={handleChangeSelect} value={deposit}>
          <Option value={undefined}>Select deposit</Option>
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
              checked={condition && condition.includes("renovation")}
              onChange={handleChangeCheckbox}
            />
            <label htmlFor="needs_renovation">Needs renovation</label>
          </div>
          <div>
            <input
              value="new_house"
              name="condition"
              type="checkbox"
              id="new_house"
              checked={condition && condition.includes("new_house")}
              onChange={handleChangeCheckbox}
            />
            <label htmlFor="new_house">New House</label>
          </div>
          <div>
            <input
              value="good"
              name="condition"
              type="checkbox"
              id="good_condition"
              checked={condition && condition.includes("good")}
              onChange={handleChangeCheckbox}
            />
            <label htmlFor="good_condition">Good condition</label>
          </div>
        </div>
      </div>

      <div className="filter">
        <h5 className="filter__title">Price Range</h5>
        <RangeSlider
          className="price"
          endValue={price_lte ? price_lte : "150000"}
          startValue={price_gte ? price_gte : "500"}
          showTooltip="true"
          max="500000"
          min={"500"}
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
              checked={allow_pets}
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
              checked={has_air_conditioning}
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
              checked={has_terrace}
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
              checked={has_swimming_pool}
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
              checked={has_garden}
              onChangeCapture={handleChangeMoreCheckbox}
            />
            <label htmlFor="has_garden">Garden</label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FiltersForm;
