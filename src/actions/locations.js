let locationItemId = 0;

export const setCurrentLocation = (location, lat, lng) => ({
    type: 'SET_CURRENT_LOCATION',
    currentLocation: location,
    currentLocationLat: lat,
    currentLocationLng: lng
});

export const setDefaultLocation = location => ({
    type: 'SET_DEFAULT_LOCATION',
    defaultLocation: location
});

export const addSavedLocation = savedLocation => ({
    type: 'ADD_SAVED_LOCATION',
    savedLocation: savedLocation,
    
});

export const deleteLocation = location => ({
    type: 'DELETE_LOCATION',
    savedLocation: location,
    savedLocations: locationItemId--
});