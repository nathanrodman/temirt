import React, {Component} from 'react'

export default class Detour extends Component {
  /*
  {
      "route": [{
        "route": 15,
        "detour": true,
        "type": "B",
        "desc": "15-Belmont\/NW 23rd"
      }],
      "info_link_url": "",
      "end": 1607015040000,
      "id": "39017",
      "begin": 1428832800000,
      "desc": "Buses continue to use the Hawthorne Bridge due to weight restrictions on the Morrison Bridge."
    }
    */
  
  render() {
    const detourRoutes = this.props.detourInfo.route.map((value) => value.route).join(', ')

    return (
    <div>
      <h3>{this.props.detourInfo.desc}</h3>
      <p>Routes affected: {detourRoutes}</p>
        {/* this.props.detourInfo.route.map((value) => {
          return `${value.route}, `
        }) */}
    </div>
    )
  }
}