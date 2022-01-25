import { combineReducers } from 'redux';

import filtersReducer from './filters/reducer';
import propertiesReducer from './properties/reducer';
import userReducer from './users/reducer'

const reducers = combineReducers({
  filters: filtersReducer,
  properties: propertiesReducer,
  user: userReducer,
});

export default reducers;
