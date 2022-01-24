import { combineReducers } from 'redux';

import filtersReducer from './filters/reducer';
import propertiesReducer from './properties/reducer';

const reducers = combineReducers({
  filters: filtersReducer,
  properties: propertiesReducer,
});

export default reducers;
