import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Select,
  Option,
  CheckBox,
  RangeSlider,
  Input,
  Icon,
  SuggestionGroupItem,
  SuggestionItem,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";

// import {
//   getFilteredProperties,
//   getFilteredArray,
// } from "../../redux/filter/action";
// import { getSearchedPropertiesByCity } from "../../redux/search/action";

function Filters({ allProperties, filterState, filters, properties }) {
  const [text, setText] = useState("");

  // const dispatch = useDispatch();
  // const state = filterState;

  const selectedBedRooms = [
    { id: 0, text: "0" },
    { id: 1, text: "1 bedroom" },
    { id: 2, text: "2 bedrooms" },
    { id: 3, text: "3 bedrooms" },
    { id: 4, text: "4 bedrooms" },
    { id: 5, text: "5 bedrooms" },
    { id: 6, text: "6 bedrooms" },
  ];
  const selectedBathRooms = [
    { id: 0, text: "0" },
    { id: 1, text: "1 bathroom" },
    { id: 2, text: "2 bathrooms" },
    { id: 3, text: "3 bathrooms" },
    { id: 4, text: "4 or + bathrooms" },
  ];
  // const handleType = (e) => {
  //   if (e.target.checked) {
  //     dispatch(
  //       getFilteredProperties({
  //         ...state,
  //         type: {
  //           ...state.type,
  //           [e.target.name]: true,
  //         },
  //       })
  //     );
  //     dispatch(
  //       getFilteredArray([
  //         ...properties,
  //         ...allProperties.filter(
  //           (item) => item.type === e.target.attributes.value.value
  //         ),
  //       ])
  //     );
  //   } else {
  //     dispatch(
  //       getFilteredProperties({
  //         ...state,
  //         type: { ...state.type, [e.target.name]: false },
  //       })
  //     );
  //     dispatch(
  //       getFilteredArray([
  //         ...properties.filter(
  //           (item) => item.type !== e.target.attributes.value.value
  //         ),
  //       ])
  //     );
  //   }
  // };

  // const handleCondition = (e) => {
  //   if (e.target.checked) {
  //     dispatch(
  //       getFilteredProperties({
  //         ...state,
  //         condition: {
  //           ...state.condition,
  //           [e.target.attributes.value.value]: true,
  //         },
  //       })
  //     );
  //     dispatch(
  //       getFilteredArray([
  //         ...properties,
  //         ...allProperties.filter(
  //           (item) => item.condition === e.target.attributes.value.value
  //         ),
  //       ])
  //     );
  //   } else {
  //     dispatch(
  //       getFilteredProperties({
  //         ...state,
  //         type: {
  //           ...state.condition,
  //           [e.target.attributes.value.value]: false,
  //         },
  //       })
  //     );
  //     dispatch(
  //       getFilteredArray([
  //         ...properties.filter(
  //           (item) => item.condition !== e.target.attributes.value.value
  //         ),
  //       ])
  //     );
  //   }
  // };
  // const sortProperties = (e) => {
  //   switch (e.detail.selectedOption.id) {
  //     case "sortByPrice":
  //       const sortedByPrice = allProperties.sort((a, b) => b.price - a.price);
  //       dispatch(getFilteredArray(sortedByPrice));
  //       break;
  //     case "sortByRoom":
  //       const sortedByRoom = allProperties.sort((a, b) => b.room - a.room);
  //       dispatch(getFilteredArray(sortedByRoom));
  //       break;
  //     case "sortByBathroom":
  //       const sortedByBathroom = allProperties.sort((a, b) => b.bath - a.bath);
  //       dispatch(getFilteredArray(sortedByBathroom));
  //       break;
  //     case "sortBySize":
  //       const sortedBySize = allProperties.sort((a, b) => b.size - a.size);
  //       dispatch(getFilteredArray(sortedBySize));
  //       break;

  //     default:
  //       console.log("default");
  //   }
  // };
  // const handleBedrooms = (e) => {
  //   dispatch(
  //     getFilteredProperties({
  //       ...state,
  //       room: e.detail.selectedOption.dataset.id,
  //     })
  //   );
  //   dispatch(
  //     getFilteredArray([
  //       ...allProperties.filter(
  //         (item) => item.room == e.detail.selectedOption.dataset.id
  //       ),
  //     ])
  //   );
  // };

  // const handleBathrooms = (e) => {
  //   dispatch(
  //     getFilteredProperties({
  //       ...state,
  //       bath: e.detail.selectedOption.dataset.id,
  //     })
  //   );
  //   dispatch(
  //     getFilteredArray([
  //       ...allProperties.filter(
  //         (item) => item.bath == e.detail.selectedOption.dataset.id
  //       ),
  //     ])
  //   );
  // };
  // const handleFilters = (e) => {
  //   if (e.target.checked) {
  //     dispatch(
  //       getFilteredProperties({
  //         ...state,
  //         specialFeatures: {
  //           ...state.specialFeatures,
  //           [e.target.id]: true,
  //         },
  //       })
  //     );
  //     dispatch(
  //       getFilteredArray([
  //         ...properties,
  //         ...allProperties.filter(
  //           (item) => item[e.target.id] !== false && !properties.includes(item)
  //         ),
  //       ])
  //     );
  //   } else {
  //     dispatch(
  //       getFilteredProperties({
  //         ...state,
  //         specialFeatures: { ...state.specialFeatures, [e.target.id]: false },
  //       })
  //     );
  //     dispatch(
  //       getFilteredArray([
  //         ...properties.filter(
  //           (item) => item[e.target.id] === false && properties.includes(item)
  //         ),
  //       ])
  //     );
  //   }
  // };
  // const handlePriceRange = (e) => {
  //   const priceRange = state.priceRange;
  //   if (
  //     e.target.startValue !== priceRange.minPrice ||
  //     e.target.endValue !== priceRange.maxPrice
  //   ) {
  //     dispatch(
  //       getFilteredProperties({
  //         ...state,
  //         priceRange: {
  //           ...state.priceRange,
  //           minPrice: e.target.startValue,
  //           maxPrice: e.target.endValue,
  //         },
  //       })
  //     );
  //     dispatch(
  //       getFilteredArray([
  //         ...allProperties.filter(
  //           (item) =>
  //             item.price > e.target.startValue && item.price < e.target.endValue
  //         ),
  //       ])
  //     );
  //   }
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(getSearchedPropertiesByCity(text));
  // };

  // const handelChange = (e) => {
  //   setText(e.target.value);
  // };

  return (
    <>
      <h3 className="grid-title">
        <i className="fa fa-filter"></i> Filters
      </h3>
      <div className="filter-box">
        <h6>Type of Home:</h6>
        <div className="checkbox">
          <CheckBox
            text="Flat/Apartment"
            className="checkboxes"
            name="flatApartment"
            value="flat/apartment"
          // onChange={handleType}
          />
          <CheckBox
            value="house"
            name="house"
            text="House"
            className="checkboxes"
          // onChange={handleType}
          />
          <CheckBox
            value="duplex"
            name="duplex"
            text="Duplex"
            className="checkboxes"
          // onChange={handleType}
          />
          <CheckBox
            value="penthouse"
            name="penthouse"
            text="Penthouse"
            className="checkboxes"
          // onChange={handleType}
          />
        </div>
      </div>
      <div className="filter-box">
        <h6>Condition:</h6>
        <div className="checkbox">
          <CheckBox
            text="New homes"
            className="checkboxes"
            value="new"
          // onChange={handleCondition}
          />
          <CheckBox
            text="Good condition"
            className="checkboxes"
            value="good"
          // onChange={handleCondition}
          />
          <CheckBox
            text="Needs renovation"
            className="checkboxes"
            value="renovation"
          // onChange={handleCondition}
          />
        </div>
      </div>
      <div className="filter-box">
        <h6>Bedrooms:</h6>
        {/* <Select onChange={handleBedrooms}>
          {selectedBedRooms.map((item) => (
            <Option key={item.id} data-id={item.id}>
              {item.text}
            </Option>
          ))}
        </Select> */}
      </div>
      <div className="filter-box">
        <h6>Bathrooms:</h6>
        {/* <Select onChange={handleBathrooms}>
          {selectedBathRooms.map((item) => (
            <Option key={item.id} data-id={item.id}>
              {item.text}
            </Option>
          ))}
        </Select> */}
      </div>
      <div className="filter-box">
        <h6>Price Range:</h6>
        <RangeSlider
          className="slider"
          min="50000"
          max="800000"
          showTooltip="true"
          startValue="150000"
          endValue="800000"
          step="50000"
        // onChange={handlePriceRange}
        />
      </div>
      {/* <div className="filter-box">
        <h6>Publication date:</h6>
        <DatePicker />
      </div> */}
      <div className="filter-box">
        <h6>More Filters:</h6>
        <div className="checkbox">
          <CheckBox
            text="Pets allowed" id="pet"
          // onChange={handleFilters} 
          />
          <CheckBox
            text="Air conditioning"
            id="air_conditioning"
          // onChange={handleFilters}
          />
          <CheckBox text="Lift" id="lift"
          // onChange={handleFilters}
          />
          <CheckBox text="Garden" id="garden"
          // onChange={handleFilters}
          />
          <CheckBox
            text="Swimming pool"
            id="swimming_pool"
          // onChange={handleFilters}
          />
          <CheckBox text="Terrace" id="terrace"
          // onChange={handleFilters}
          />
        </div>
      </div>
      {/* Result Side  */}
      <div className="col-md-9">
        <h3>
          <i className="fas fa-poll-h"></i> Results
        </h3>
        <hr></hr>
        <div className="input-group">
          <form
          // onSubmit={handleSubmit}
          >
            <Input
              // icon={<Icon name="search" onClick={handleSubmit} />}
              className="search-bar"
              placeholder="Search by city..."
              // onChange={handelChange}
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
        </div>

        <div className="filter-box">
          <div className="col-sm-6">
            <Select className="filterBy"
            // onChange={sortProperties}
            >
              <h6>Order by:</h6>
              <Option id="sortByPrice">Price</Option>
              <Option id="sortBySize">Size</Option>
              <Option id="sortByRoom">Room</Option>
              <Option id="sortByBathroom">Bathroom</Option>
            </Select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filters;
