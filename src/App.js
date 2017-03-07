import React, { Component } from 'react';
import './App.css';

import SearchForm from './SearchForm';

export default class App extends Component {

  getArrivals(stopId) {
    const url = `https://developer.trimet.org/ws/v2/arrivals/locIDs/${stopId}/appID/D94D452860ED1DE75679E8EB4`;
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send()

    request.onreadystatechange = () => {
      if(request.readyState === XMLHttpRequest.DONE) {
        if(request.status === 200){
          console.log(request.responseText);
        }
        else {
          console.log('Something went wrong')
          console.log(request.responseText);
        }
      }
    }
  }
  render() {
    return (
      <div>
        <h1>Temirt</h1>
        <SearchForm getArrivals={this.getArrivals} />
      </div>
    )
  }
}
