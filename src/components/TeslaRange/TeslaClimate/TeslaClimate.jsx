import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

import './TeslaClimate.css';

const propTypes = {
  value: PropTypes.bool.isRequired,
  limit: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

class TeslaClimate extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)

    this.state = {
      focused: false
    }
  }

  onChange(event) {
    this.props.onChange(event.target.checked)
  }

  render() {
    let { focused } = this.state;
    let { limit, value } = this.props;

    return (
      <div className="tesla-climate-btn">
        <label className={classNames(`tesla-climate-btn-item`, { 'tesla-heat': !limit, 'tesla-climate-btn-item-active': value, 'tesla-climate-btn-item-focused': focused === value })} >
          <p>{limit ? 'ac' : 'heat'} {value ? 'on' : 'off'}</p>
          <i className="tesla-climate-btn-icon"></i>
          <input type="checkbox" name="climate" checked={value} onChange={this.onChange} />
        </label>
      </div>
    );
  }
}

TeslaClimate.propTypes = propTypes;

export default TeslaClimate;
