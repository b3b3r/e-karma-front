import { combineReducers } from 'redux';

import users from './users.js';
import user from './user.js';
import topics from './topics.js';

const allReducers = combineReducers({
    users,
    user,
    topics,
  });
  
  export default allReducers;