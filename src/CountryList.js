import React, { Component } from 'react';
//import logo from './logo.svg';
//remember to `npm install isomorphic-fetch --save`
import fetch from 'isomorphic-fetch' //a polyfill created by WHATWG
class CountryList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countryNames: [],
      loading:false
    } //this.state
  }

  componentDidMount() {
    this.setState({loading:true}) //let component and users know we are in the process of receiving data
    fetch('https://restcountries.eu/rest/v1/all')
    .then(response => response.json())
    .then(json => json.map(country => country.name))
    .then(countryNames =>
      this.setState({countryNames, loading:false})
    )
  }

  render() {
    const {countryNames, loading } = this.state
    return (
    (loading) ?
      <div>Loading names f Countries...</div> :
      (!countryNames.length) ?
        <div>No country names</div>  :
        <ul>{countryNames.map(
          (x,i) => <li key={i}>{x}</li>
          )}
        </ul>
      )
  }//close render()
}//close <CountryList />

export default CountryList;
