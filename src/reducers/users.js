const initialState = {
  loading: false,
  users: [],
  error: '',
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS_USERS': {
      return {
        loading: false,
        users: action.users.map(user => ({
          ...user,
        })),
        error: '',
      };
    }
    default:
      return state;
  }
};

export default users;
