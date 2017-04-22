import React, { Component } from 'react';
import rangeModel from '../../data/rangeModel';
import TeslaRangeHeader from './TeslaRangeHeader/TeslaRangeHeader';
import TeslaRangeCar from './TeslaRangeCar/TeslaRangeCar';
import TeslaStats from './TeslaStats/TeslaStats';

const TESLA_MODELS = ['60', '60D', '75', '75D', '90D', 'P100D']

function calculateStats(settings, models) {
  return models.map(model => {
    let {climate, speed, temperature, wheels} = settings
    let miles = rangeModel[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature]

    return {
      model,
      miles
    };
  })
}

class TeslaRange extends Component {
  constructor() {
    super()

    this.defaultSettings = { climate: true, speed: 55, temperature: 20, wheels: 19 }
    this.stats = calculateStats(this.defaultSettings, TESLA_MODELS)
  }

  render() {
    let stats = this.stats

    return (
      <div>
        <TeslaRangeHeader />
        <TeslaRangeCar />
        <TeslaStats stats={stats} />

        <div className="disclaimer-range">
          <p>The actual amount of range that you experience will vary based on your particular use conditions. See how particular use conditions may affect your range in our simulation model.</p>
          <p>Vehicle range may vary depending on the vehicle configuration, battery age and condition, driving style and operating, environmental and climate conditions.</p>
        </div>
      </div>
    );
  }
}

export default TeslaRange;
