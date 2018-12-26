import React, { Component } from 'react'
import {retrieveCoords} from '../../services/Geocode.js';

export default class CitySearch extends Component {
 state = {
   query: '',
   queriedCity: ''
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
  this.setState({queriedCity: cityResult});
}

 render() {
   return (
     <form className="city-search-form"
      onSubmit={this.onSearchSubmit}
     >
       <input
         placeholder="Search a Location..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <button type="submit">Test</button>
       <p>{this.state.query}</p>
       {this.state.queriedCity && <h4>{this.state.queriedCity}</h4>}
     </form>
   )
 }
}
