import React from 'react';

const StoreLocation = (locationName, locationObj) => {
    const cachedLat = locationObj.coords.latitude;
    const cachedLng = locationObj.coords.longitude;
    let cachedLocationString = `${cachedLat},${cachedLng}`
    localStorage.setItem(locationName, cachedLocationString);
};

export default StoreLocation;