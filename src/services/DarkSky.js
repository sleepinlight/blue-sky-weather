import axios from 'axios';
import DarkSkyAPI from '../keys';

const retrieveWeather = (lat, long, onSuccess) => {
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
};

export default retrieveWeather;