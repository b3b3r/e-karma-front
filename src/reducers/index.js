import { combineReducers } from 'redux';

import users from './users.js';
import topics from './topics.js';
import search from './search.js';

const allReducers = combineReducers({
    users,
    topics,
    search,
  });
  
  export default allReducers;