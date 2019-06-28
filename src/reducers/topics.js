const initialState = {
    loading: false,
    list: [],
    error: '',
};

const topics = (state = initialState, action) => {
    switch (action.type) {
        case 'START_FETCH_TOPICS': {
            return {
              ...state,
              loading: true,
            };
          }
          case 'FETCH_SUCCESS_TOPICS': {
            return {
              loading: false,
              list: [...action.topics],
              error: '',
            };
          }
          case 'FETCH_ERROR_TOPICS': {
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

export default topics;