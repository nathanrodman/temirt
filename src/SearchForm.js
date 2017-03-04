import React, { Component } from 'react';

export default class SearchForm extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      stopId: ''
    }
  }

  handleSubmit(e){
    const url = `https://developer.trimet.org/ws/v2/arrivals/locIDs/${this.state.stopId}/appID/D94D452860ED1DE75679E8EB4`;
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