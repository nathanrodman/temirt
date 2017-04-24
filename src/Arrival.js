import React, {Component} from 'react'

export default class Arrival extends Component {

  arrivalTime(){
    if(this.props.arrivalData.status === "estimated"){
      const time = Math.floor((this.props.arrivalData.estimated - Date.now()) / 60000)
      return time <= 0 ?  <p>Arriving <strong>now</strong></p> : <p>Arriving in {time} minutes</p>
    }
    else if(this.props.arrivalData.status === "scheduled"){
      const scheduledTime = this.props.arrivalData.scheduled;
      const time = Math.floor((scheduledTime - Date.now()) / 60000);

      return time <= 60 ? `Scheduled to arrive in ${time} minutes` : `Scheduled to arrive at ${new Date(scheduledTime).toString()}`
    }
  }

  render(){

    const listStyle = {
      "list-style-type": "none", 
    };
    const arrivalData = this.props.arrivalData;

    const style = {
      "display": "flex",
      "flex-direction": "row",
    };
    return (
        <div className="container arrival-container animated fadeInUp" style={style}>
          <div className="bus-icon">
            <i className="fa fa-bus" aria-hidden="true"></i>
          </div>
          <div className="fullsign">
          { this.props.arrivalData.fullSign }
          </div>
          <div className="arrival-time">
          { this.arrivalTime() }
          </div>
        </div>
    )
  }
}