import { combineReducers } from 'redux';

import users from './users.js';
import user from './user.js';
import topics from './topics.js';
import search from './search.js';

const allReducers = combineReducers({
    users,
    user,
    topics,
    search,
  });
  
  export default allReducers;