import { combineReducers } from 'redux';

import displayUser from './user.js';

const allReducers = combineReducers({
    displayUser,
  });
  
  export default allReducers;