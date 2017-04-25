import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

import './TeslaWheels.css';

const propTypes = {
  size: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

const wheels = [
  { id: 1, size: 19 },
  { id: 2, size: 21 }
]

class TeslaWheels extends Component {
  constructor(props) {
    super(props)

    this.onFocus  = this.onFocus.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = {
      value: this.props.size,
      focus: this.props.size
    }
  }

  onFocus(event) {
    this.setState({value: Number(event.target.value), focus: Number(event.target.value)})
  }

  onChange(event) {
    this.props.onChange(Number(event.target.value))
  }

  render() {
    let value = this.state.value
    let focus = this.state.focus

    return (
      <div className="tesla-wheels">
        <p className="tesla-wheels-title">Wheels</p>
        <div className="tesla-wheels-container cf">
          {wheels.map(wheel =>
            <label key={wheel.id} className={classNames(`tesla-wheels-item tesla-wheels-item-${wheel.size}`, { 'tesla-wheels-item-active': value === wheel.size, '  tesla-wheels-item-focused': focus === wheel.size,})}>
              <input type="radio" value={wheel.size} onFocus={this.onFocus} onChange={this.onChange} />
              <p>{wheel.size}"</p>
            </label>
          )}
        </div>
      </div>
    );
  }
}

TeslaWheels.propTypes = propTypes;

export default TeslaWheels;
