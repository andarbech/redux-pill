const initialState = {
  properties: [],
  filters: {
    type: {
      house: false,
      flat: false,
      penthouse: false,
      duplex: false
    },
    state: [],
    bedrooms: null,
    bathrooms: null,
    min_price: null,
    max_price: null,
    equipment: [],
    additional_filters: [],
  },
};

export default initialState;
