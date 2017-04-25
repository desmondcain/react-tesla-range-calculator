import React, { Component } from 'react';

import './TeslaClimate.css';

class TeslaClimate extends Component {

  render() {
    return (
      <div className="tesla-climate">
        <label className="tesla-climate-item">
          <i className="tesla-climate-icon"></i>
          <input type="checkbox" name="climate" />
        </label>
      </div>
    );
  }
}

export default TeslaClimate;
