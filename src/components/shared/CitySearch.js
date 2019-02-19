import React, { Component } from 'react'
import {retrieveCoords} from '../../services/Geocode.js';
import { connect } from 'react-redux';
import {addSavedLocation, setCurrentLocation} from '../../actions/locations';

const mapStateToProps = (state) => ({
  savedLocations: state.locations.savedLocations,
  currentLocation: state.locations.currentLocation
});

const mapDispatchToProps = dispatch => ({
  onAddSavedLocation: (location) => dispatch(addSavedLocation(location)),
  onSetCurrentLocation: (location, lat, lng) => dispatch(setCurrentLocation(location, lat, lng))
})

class CitySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      queriedCity: '',
      queriedCityLat: '',
      queriedCityLng: ''
    };
  }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

onSearchSubmit = (e) => {
  e.preventDefault();
  let searchQuery = this.state.query;
  retrieveCoords(searchQuery, this.updateCurrentCity);
}

updateCurrentCity = (resp) => {
  let cityResult = resp.data.results[0].formatted_address;
  let cityLat = resp.data.results[0].geometry.location.lat;
  let cityLng = resp.data.results[0].geometry.location.lng;
  this.setState({queriedCity: cityResult, queriedCityLat: cityLat, queriedCityLng: cityLng});
}

handleQueriedLocation = (location, lat, lng) => {
  this.props.onAddSavedLocation(this.formatNewLocation(location, lat, lng));
  this.props.onSetCurrentLocation(location, lat, lng);
}

formatNewLocation = (location, lat, lng) => {
  const newLocation = {name: location, lat: lat, lng: lng};
  return newLocation;
}

 render() {
   return (
     <form className="city-search-form"
      onSubmit={this.onSearchSubmit}
     >
     <h1>{this.props.currentLocation}, {this.props.currentLocationLat}, {this.props.currentLocationLng}</h1>
       <input
         placeholder="Search a Location..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <button type="submit">Test</button>
       {this.state.queriedCity && 
        <div>
            <h4>{this.state.queriedCity}</h4><button onClick={() => this.handleQueriedLocation(this.state.queriedCity, this.state.queriedCityLat, this.state.queriedCityLng)}>+</button>
        </div>}
      {
        this.props.savedLocations.map((location, i) => (
          <h4 key={i} onClick={() => this.props.onSetCurrentLocation(location.name, location.lat, location.lng)}>{location.name}</h4>
        ))}
        
     </form>
   )
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitySearch);