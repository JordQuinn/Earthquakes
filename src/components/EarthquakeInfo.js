import React, { Component } from 'react';
import moment from 'moment';

export default class EarthquakeInfo extends Component {
  render() {
    return (
      <div className = "earthquake-title"> This is a list earthquakes occurring on July 14th, 2017 across the United States.</div>
    )
  }
}



// or use this to get current date for hard mode: {moment().format("MMM Do")} 
