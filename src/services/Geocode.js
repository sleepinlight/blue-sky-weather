import axios from 'axios';
import {GoogleMapsAPI} from '../keys';

const retrieveCityName = (lat, long, onSuccess) => {
    //TODO: Implement reverse Geocode
};

const retrieveCoords = (cityName, onSuccess) => {
    if(GoogleMapsAPI != null) {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const apiString = `https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=${GoogleMapsAPI}`;
        let endpoint = proxy + apiString;
        axios.get(endpoint)
        .then(function(response) {
            onSuccess(response);
        })
      .catch(function (error) {
        console.log(error);
      });
      } else {
        //TODO: Better implementation of API Key checking
       console.log("please provide an API Key");
      } 
};

export {retrieveCoords};