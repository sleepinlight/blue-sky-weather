import axios from 'axios';
import DarkSkyAPI from '../keys';

const retrieveWeather = (lat, long, onSuccess) => {
  if(DarkSkyAPI != null) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const darksky = 'https://api.darksky.net/forecast/';
    const apikey = DarkSkyAPI;
    let endpoint = proxy + darksky + apikey + "/" + lat + "," + long;
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

export default retrieveWeather;