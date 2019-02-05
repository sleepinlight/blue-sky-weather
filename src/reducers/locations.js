// Search Reducer
const initialState = {
    payload: [],
    currentLocation: '',
    savedLocations: ['Lake Charles'],
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
          isLoading: true,
          currentLocation: action.location,
          message: action.message
          
      };
      
      case 'SET_DEFAULT_LOCATION':
        return {
          ...state,
          payload: action.payload,
          isLoading: false
        };
      
      case 'ADD_SAVED_LOCATION':
      console.log('saved location reducer! ' + action.savedLocation);
        return {
          ...state,
          savedLocations: [...state.savedLocations, action.savedLocation],
          error: action.error,
          isLoading: false,
        };
      case 'DELETE_LOCATION':
        return { ...state, ...initialState };
      default:
        return state;
    }
  }