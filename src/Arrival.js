import React, {Component} from 'react'

export default class Arrival extends Component {

  arrivalTime(){
    if(this.props.arrivalData.status === "estimated"){
      const time = Math.floor((this.props.arrivalData.estimated - Date.now()) / 60000)
      return time === 0 ? `Arriving now` : `Arriving in ${time} minutes`
    }
    else if(this.props.arrivalData.status === "scheduled"){
      const scheduledTime = this.props.arrivalData.scheduled
      const time = Math.floor((scheduledTime - Date.now()) / 60000)
      
      console.log("Estimated time: ", time);
      console.log("this.props.arrivalData.scheduled: ", scheduledTime );

      return time <= 60 ? `Scheduled to arrive in ${time} minutes` : `Scheduled to arrive at ${new Date(scheduledTime).toString()}`
    }
  }

  render(){
    const arrivalData = this.props.arrivalData;
    // this.props.arrivalData
    return (
      <li>
        { this.arrivalTime()
          //arrivalData.estimated && <span>Arriving in: {Math.floor((arrivalData.estimated - Date.now()) / 60000)} minutes</span>
        }
      </li>
    )
  }
}