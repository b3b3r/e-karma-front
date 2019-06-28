import { combineReducers } from 'redux';

import users from './users.js';
import topics from './topics.js';

const allReducers = combineReducers({
    users,
    topics,
  });
  
  export default allReducers;