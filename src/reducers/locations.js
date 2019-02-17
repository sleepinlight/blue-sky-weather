const initialState = {
    payload: [],
    currentLocation: '',
    currentLocationLat: '',
    currentLocationLng: '',
    savedLocations: [{name: 'Lake Charles', lat: 30.2266, lng: 93.2174}],
    isLoading: false,
    error: {},
    message: "there is a fkn error"
  }
  export default function locations(state=initialState, action) {
    switch(action.type) {
      case 'SET_CURRENT_LOCATION':
      
        return {
          ...state,
          isLoading: true,
          currentLocation: action.currentLocation,
          currentLocationLat: action.currentLocationLat,
          currentLocationLng: action.currentLocationLng,
          message: action.message
          
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