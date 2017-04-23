import React, { Component } from 'react';
import { string, number } from 'prop-types';

import './TeslaCounter.css'

class TeslaCounter extends Component {

  render() {
    let { max, min, step, title, unit } = this.props
    let value;

    return (
      <div className="tesla-counter">
        <p className="tesla-counter-title">{title}</p>
        <div className="tesla-counter-container cf">
          <div className="tesla-counter-item" tabIndex="0">
            <p className="tesla-counter-number">
              {value}
              <span>{unit}</span>
            </p>
            <div className="tesla-counter-controls" tabIndex="-1">
              <button tabIndex="-1"></button>
              <button tabIndex="-1"></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TeslaCounter.propTypes = {
  max: number.isRequired,
  min: number.isRequired,
  step: number.isRequired,
  title: string.isRequired,
  value: number.isRequired,
  unit: string.isRequired,
}

export default TeslaCounter;
