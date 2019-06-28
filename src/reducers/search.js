const initialState = {
  /* topics: state.topics, */
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        
      }
    default:
      return state
  }
}

export default search;