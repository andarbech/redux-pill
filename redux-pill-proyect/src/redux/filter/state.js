const initialState = {
  properties: [],
   filteredProperties:[],
  filters: {
    type: undefined,
    conditions: {},
    bed: undefined,
    bath: undefined,
    minPrice: undefined,
    maxPrice: undefined,
    deposit: "zero",
    equipment: {},
    moreFilters: {},
  },
};

export default initialState;
