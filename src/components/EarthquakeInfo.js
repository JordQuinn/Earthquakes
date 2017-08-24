import React, { Component } from 'react';
import moment from 'moment';

export default class EarthquakeInfo extends Component {
  render() {
    return (
      <div className = "earthquake-title"> This is a list earthquakes occurring on {moment().format("MMM Do")} across the United States.</div>
    )
  }
}
