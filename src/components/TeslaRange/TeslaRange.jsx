import React, { Component } from 'react';
import TeslaRangeHeader from './TeslaRangeHeader/TeslaRangeHeader';
import TeslaRangeCar from './TeslaRangeCar/TeslaRangeCar';

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
