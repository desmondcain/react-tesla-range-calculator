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
        <div className="tesla-wheels">
          <div className={`tesla-wheel tesla-wheel-front tesla-wheel-${wheelSize}`}></div>
          <div className={`tesla-wheel tesla-wheel-rear tesla-wheel-${wheelSize}`}></div>
        </div>
      </div>
    );
  }
}

TeslaRangeCar.propTypes = propTypes;

export default TeslaRangeCar;
