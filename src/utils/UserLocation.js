import React, {Component} from 'react';
import {Alert} from 'reactstrap';

const fetchLocation = (onSuccess, onError) => {
    let startPos;
    const geoSuccess = (position) => {
      startPos = position;
      return onSuccess(startPos);
    };
    const geoError = () => {
      const errorMessage = 'Either your browser does not support geolocation, or you have denied permission!';
      console.log(errorMessage);
      return (
        <Alert color="warning">
          <h4>{errorMessage}</h4>
        </Alert>
      );
    }
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}

export default fetchLocation;