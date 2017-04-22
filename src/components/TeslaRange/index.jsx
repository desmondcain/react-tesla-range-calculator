import React, { Component } from 'react';
import { string, number } from 'prop-types';
import TeslaRangeHeader from './TeslaRangeHeader/TeslaRangeHeader';
import TeslaRangeCar from './TeslaRangeCar/TeslaRangeCar';

const TESLA_MODELS = ['60', '60D', '75', '75D', '90D', 'P100D'];

class TeslaRange extends Component {

  render() {
    return (
      <div>
        <TeslaRangeHeader />
        <TeslaRangeCar />
      </div>
    );
  }
}

export default TeslaRange;
