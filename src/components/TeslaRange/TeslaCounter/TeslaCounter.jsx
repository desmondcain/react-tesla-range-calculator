import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './TeslaCounter.css'

class TeslaCounter extends Component {
  constructor() {
    super()

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    if (this.props.value < this.props.max) {
      this.props.onChange(this.props.value + this.props.step)
    }
  }

  decrement() {
    if (this.props.value > this.props.min) {
      this.props.onChange(this.props.value - this.props.step)
    }
  }

  render() {
    let { max, min, title, unit, value } = this.props

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
              <button type="button" onClick={this.increment} tabIndex="-1" disabled={value === max}></button>
              <button type="button" onClick={this.decrement} tabIndex="-1" disabled={value === min}></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TeslaCounter.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TeslaCounter;
