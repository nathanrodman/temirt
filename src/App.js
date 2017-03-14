import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import SearchForm from './SearchForm';
import ArrivalTable from './ArrivalTable';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      arrivalData: null,
      arrivalOk: false,
    };

  }
  
  getArrivals(stopId) {
    const url = `https://developer.trimet.org/ws/v2/arrivals/locIDs/${stopId}/appID/D94D452860ED1DE75679E8EB4`;
    axios.get(url)
      .then((response) => {
        console.log(response);
        this.setState({
          arrivalData: JSON.parse(response.request.responseText),
          arrivalOk: true,
        });    
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          arrivalData: error,
          arrivalOk: false,
        });
      });
  }

  render() {

    return (
      <div>
        <h1>Temirt</h1>
        <SearchForm getArrivals={this.getArrivals.bind(this)} />
        { this.state.arrivalOk ? <ArrivalTable arrivals={this.state.arrivalData} /> : null }
      </div>
    )
  }
}
