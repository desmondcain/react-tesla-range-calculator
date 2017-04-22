import React, { Component } from 'react';
import { string, number } from 'prop-types';
import TeslaRangeHeader from './TeslaRangeHeader/TeslaRangeHeader';
import TeslaRangeCar from './TeslaRangeCar/TeslaRangeCar';
import TeslaStats from './TeslaStats/TeslaStats';

const TESLA_MODELS = ['60', '60D', '75', '75D', '90D', 'P100D'];

class TeslaRange extends Component {

  render() {
    return (
      <div>
        <TeslaRangeHeader />
        <TeslaRangeCar />
        <TeslaStats />

        <div className="disclaimer-range">
          <p>The actual amount of range that you experience will vary based on your particular use conditions. See how particular use conditions may affect your range in our simulation model.</p>
          <p>Vehicle range may vary depending on the vehicle configuration, battery age and condition, driving style and operating, environmental and climate conditions.</p>
        </div>
      </div>
    );
  }
}

export default TeslaRange;
