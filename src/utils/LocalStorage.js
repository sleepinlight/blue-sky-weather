
///////SETTERS

const setSingleStorageItem = (name, item) => {
    localStorage.setItem(name, item);
}

const setStorageDefaultLocation = (cityname) => {
    localStorage.setItem("BlueSkyDefaultLocation", cityname);
}

const setStorageSavedLocations = (locationsArr) => {
    localStorage.setItem("BlueSkySavedLocations", JSON.stringify(locationsArr));
}

///////GETTERS

const getStorageDefaultLocation = (stateHandler) => {
    const defaultLocation = localStorage.getItem("BlueSkyDefaultLocation");
    stateHandler(defaultLocation);
}

const getStorageSavedLocations = (stateHandler) => {
    const storedLocations = JSON.parse(localStorage.getItem("BlueSkySavedLocations"));
    stateHandler(storedLocations);
}

///////INITIALIZE

const configureLocalStorage = (defaultLocHandler, savedLocsHandler) => {
    if (localStorage.getItem("BlueSkyDefaultLocation") !== null) {
        getStorageDefaultLocation(defaultLocHandler);
      }
    if (localStorage.getItem("BlueSkySavedLocations") !== null) {
        getStorageSavedLocations(savedLocsHandler);
    }
}

//TODO: EXPORT AND IMPLEMENT
export {setSingleStorageItem, setStorageDefaultLocation, setStorageSavedLocations, configureLocalStorage};