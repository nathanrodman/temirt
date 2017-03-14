import React, {Component} from 'react'

export default class Arrival extends Component {


  render(){
    return (
      <li>
        {JSON.stringify(this.props.data)}
      </li>
    );
  }
}