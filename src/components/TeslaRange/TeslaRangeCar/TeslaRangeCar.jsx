import React, { Component } from 'react';
import { number } from 'prop-types';

const propTypes = {
  wheelSize: number.isRequired
}

import './TeslaRangeCar.css';

class TeslaRangeCar extends Component {

  render() {
    let wheelSize = this.props.wheelSize;

    return (
      <div className="tesla-car">
        <div className="tesla-car-wheels">
          <div className={`tesla-car-wheel tesla-car-wheel-front tesla-car-wheel-${wheelSize}`}></div>
          <div className={`tesla-car-wheel tesla-car-wheel-rear tesla-car-wheel-${wheelSize}`}></div>
        </div>
      </div>
    );
  }
}

TeslaRangeCar.propTypes = propTypes;

export default TeslaRangeCar;
