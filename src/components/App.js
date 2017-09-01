import React, { Component } from 'react';
import EarthquakeInfo from '../components/EarthquakeInfo.js';
import  '../styles/App.css';
import moment from "moment";
import EarthquakeList from '../components/EarthquakeList';

class App extends Component {
  render() {
    return (

      <div className="App">
        <div>
            <div className="my-header">Earthquakes!</div>
        <div className="title">
          <EarthquakeInfo/>
          <EarthquakeList/>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
