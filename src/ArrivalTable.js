import React, {Component} from 'react'

import Arrival from './Arrival';

export default class ArrivalTable extends Component {

  /*
    this.props.arrivals
  */

  detourBanner(){
    if(this.props.arrivals.resultSet.detour){
      return (
        <div>
          test
        </div>
      )
    }
  }

  render(){
    return (
      <ul>
        {this.props.arrivals.resultSet.arrival.map((value, index) => {
          return <Arrival data={value} />
        })}
      </ul>
    )
  }
}