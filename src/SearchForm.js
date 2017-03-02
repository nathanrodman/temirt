import React, { Component } from 'react';

export default class SearchForm extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      stopId: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
  }
  
  handleTyping(e){
    e.preventDefault();

    const value = e.target.value;
    const rgx = /^[0-9]{0,7}$/

    if(rgx.test(value)){
      this.setState({
        [e.target.name]: value,
      });
    }
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type='text' 
          name="stopId" 
          placeholder='Enter Stop ID'
          value={this.state.stopId}
          onChange={this.handleTyping.bind(this)}
          />
        <button type="button">Search</button>
      </form>
    )
  }
}