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

          { arrivals.detour && arrivals.detour.map((value, index) => {
            return <Detour detourInfo={value} /> 
    })}
          {arrivals.error ? <div className='alert alert-danger'>{arrivals.error.content}</div> :
            arrivals.arrival ? arrivals.arrival.map((value, index) => {
              return <Arrival arrivalData={value} />;
            }) : <div className='alert alert-info'>{`No current arrivals`}</div>
          }
      </div>
    )
  }
}