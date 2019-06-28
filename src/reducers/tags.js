const initialState = {
  loading: false,
  list: [],
  error: '',
};

const tags = (state = initialState, action) => {
  switch (action.type) {
      case 'START_FETCH_TAGS': {
          return {
            ...state,
            loading: true,
          };
        }
        case 'FETCH_SUCCESS_TAGS': {
          return {
            loading: false,
            list: [...action.tags],
            error: '',
          };
        }
        case 'FETCH_ERROR_TAGS': {
          return {
            ...state,
            loading: false,
            error: action.err,
          };
        }
      
      default:
          return state;
  }
}

export default tags;