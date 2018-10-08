const fetchLocation = (onSuccess) => {
    let startPos;
    const geoSuccess = (position) => {
      startPos = position;
      return onSuccess(startPos);
    };
    navigator.geolocation.getCurrentPosition(geoSuccess);
}

export default fetchLocation;