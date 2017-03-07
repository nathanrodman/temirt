import React, {Component} from 'react'

export default class ArrivalTable extends Component {

  /*
    this.props.arrivals
  */

  render(){
    return (
      <p>
        {JSON.stringify(this.props.arrivals)}
      </p>
    )
  }
}