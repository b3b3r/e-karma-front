const initialState = {
    loading: false,
    user: {},
    error: '',
  }
  
  const user = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS_USER': {
        return {
          loading: false,
          user: {...action.user},
          error: '',
        };
      }
      default:
        return state;
    }
  };
  
  export default user;
  