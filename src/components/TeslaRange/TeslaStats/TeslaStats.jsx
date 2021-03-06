import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './TeslaStats.css';

const propTypes = {
  stats: PropTypes.array.isRequired
}

class TeslaStats extends Component {

  render() {
    let stats = this.props.stats;

    return (
      <div className="tesla-stats">
        <ul>
          {stats.map(stat =>
            <li key={stat.model}>
              <div className={`tesla-stats-icon tesla-stats-icon-${stat.model.toLowerCase()}`}></div>
              <p>{stat.miles}</p>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

TeslaStats.propTypes = propTypes;

export default TeslaStats;
