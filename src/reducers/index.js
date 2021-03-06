import { combineReducers } from 'redux';

import users from './users.js';
import user from './user.js';
import topics from './topics.js';
import tags from './tags.js';

const allReducers = combineReducers({
    users,
    user,
    topics,
    tags,
  });
  
  export default allReducers;