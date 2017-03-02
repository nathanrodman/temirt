import React, { Component } from 'react';
import './App.css';

import SearchForm from './SearchForm';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Temirt</h1>
        <SearchForm />
      </div>
    )
  }
}
