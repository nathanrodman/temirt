import React, {Component} from 'react'

import Arrival from './Arrival';
import Detour from './Detour';

export default class ArrivalTable extends Component {

  /*
    this.props.arrivals
  */

  render(){
    const arrivals = this.props.arrivals.resultSet;

    return (
      <div>
        <h3>{arrivals.location && `${arrivals.location[0].id} - ${arrivals.location[0].desc}`}</h3>
        <ul>
          { arrivals.detour && arrivals.detour.map((value, index) => {
            return <Detour detourInfo={value} /> 
    })}
          {arrivals.error ? <li>{arrivals.error.content}</li> :
            arrivals.arrival ? arrivals.arrival.map((value, index) => {
              return <Arrival arrivalData={value} />;
            }) : <li>{`No current arrivals for stop ${arrivals.location[0].id}`}</li>
          }
        </ul>
      </div>
    )
  }
}