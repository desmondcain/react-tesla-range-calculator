import React, { Component } from 'react';
import teslaCarImg from '../../../images/tesla.jpg';

import './TeslaRangeCar.css';

class TeslaRangeCar extends Component {

  render() {
    return (
      <img src={teslaCarImg} className="tesla-range-car" alt="Tesla Car" />
    );
  }
}

export default TeslaRangeCar;
