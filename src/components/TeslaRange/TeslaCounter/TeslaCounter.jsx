import React, { Component } from 'react';

import './TeslaCounter.css'

class TeslaConter extends Component {

  render() {
    let title = this.props.title
    let value = this.props.value
    let unit  = this.props.unit

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
              <button tabIndex="-1"></button>
              <button tabIndex="-1"></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeslaConter;
