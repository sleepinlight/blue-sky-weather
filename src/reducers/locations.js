// Search Reducer
const initialState = {
    payload: [],
    isLoading: false,
    error: {},
    message: "there is a fkn error"
  }
  export default function locations(state=initialState, action) {
    switch(action.type) {
      case 'SET_CURRENT_LOCATION':
      console.log(state);
        return {
          ...state,
          isLoading: true
      };
      
      case 'SET_DEFAULT_LOCATION':
        return {
          ...state,
          payload: action.payload,
          isLoading: false
        };
      
      case 'ADD_SAVED_LOCATION':
        return {
          ...state,
          error: action.error,
          isLoading: false      
        };
      case 'DELETE_LOCATION':
        return { ...state, ...initialState }    
      default:
        return state;
    }
  }