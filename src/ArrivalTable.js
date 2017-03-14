import React, {Component} from 'react'

import Arrival from './Arrival';

export default class ArrivalTable extends Component {

  /*
    this.props.arrivals
  */

  render(){
    const arrivals = this.props.arrivals.resultSet;

    return (
      <ul>
        {/* arrivals.detour && <Detour detourInfo={arrivals.detour} */}
        {arrivals.error ? <li>{arrivals.error.content}</li> :
          arrivals.arrival ? arrivals.arrival.map((value, index) => {
            return <Arrival arrivalData={value} />;
          }) : <li>{`No current arrivals for stop ${arrivals.location[0].id}`}</li>
        }
      </ul>
    )
  }
}