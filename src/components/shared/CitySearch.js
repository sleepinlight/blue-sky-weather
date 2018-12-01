import React, { Component } from 'react'

export default class CitySearch extends Component {
 state = {
   query: '',
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

 //TODO: Wire this up to use Google Maps API
 render() {
   return (
     <form>
       <input
         placeholder="Search a Location..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
     </form>
   )
 }
}


