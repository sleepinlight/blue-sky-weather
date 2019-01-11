let locationItemId = 0;

export const setCurrentLocation = (location, message) => ({
    type: 'SET_CURRENT_LOCATION',
    location: location,
    message: message
});

export const setDefaultLocation = location => ({
    type: 'SET_DEFAULT_LOCATION',
    defaultLocation: location
});

export const addSavedLocation = location => ({
    type: 'ADD_SAVED_LOCATION',
    savedLocation: location,
    savedLocations: locationItemId++
});

export const deleteLocation = location => ({
    type: 'DELETE_LOCATION',
    savedLocation: location,
    savedLocations: locationItemId--
});