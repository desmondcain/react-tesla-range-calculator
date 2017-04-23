import React, { Component } from 'react';
import rangeModel from '../../data/rangeModel';
import TeslaRangeHeader from './TeslaRangeHeader/TeslaRangeHeader';
import TeslaRangeCar from './TeslaRangeCar/TeslaRangeCar';
import TeslaStats from './TeslaStats/TeslaStats';
import TeslaCounter from './TeslaCounter/TeslaCounter';

import './index.css';

const TESLA_MODELS = ['60', '60D', '75', '75D', '90D', 'P100D']

class TeslaRange extends Component {
  constructor() {
    super()

    this.calculateStats = this.calculateStats.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onChange = this.onChange.bind(this)

    this.settings = { climate: true, speed: 55, temperature: 20, wheels: 19 }

    this.state = {
      settings: this.settings,
      stats: this.calculateStats(this.settings, TESLA_MODELS)
    }
  }

  componentWillMount() {
    this.handlers = {}
  }

  handleChange(name) {
    if (!this.handlers[name]) {
      this.handlers[name] = (value) => { this.onChange(name, value) }
    }
    return this.handlers[name]
  }

  onChange(name, value) {
    let settings = {...this.state.settings, [name]: value}
    this.setState({settings: settings, stats: this.calculateStats(settings, TESLA_MODELS)});
  }

  calculateStats(settings, models) {
    return models.map(model => {
      const { climate, speed, temperature, wheels } = settings
      const miles = rangeModel[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature]

      return {
        model,
        miles
      };
    })
  }

  render() {
    const settings = this.state.settings
    const stats = this.state.stats

    return (
      <div className="tesla-range">
        <TeslaRangeHeader />
        <TeslaRangeCar wheelSize={settings.wheels} />
        <TeslaStats stats={stats} />

        <div className="tesla-controlls">
          <TeslaCounter
            title="Speed"
            unit="mph"
            step={5}
            min={45}
            max={70}
            value={settings.speed}
            onChange={this.handleChange('speed')}
          />
        </div>

        <div className="row">
          <p className="notice-range">
            The actual amount of range that you experience will vary based on your particular use conditions. See how particular use conditions may affect your range in our simulation model.
            Vehicle range may vary depending on the vehicle settingsuration, battery age and condition, driving style and operating, environmental and climate conditions.
          </p>
        </div>
      </div>
    );
  }
}

export default TeslaRange;
