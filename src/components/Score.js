import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Score extends Component {
  render() {
    return (
      <div style={scoreStyle}>
        <span className="currentScore">Current Score: {this.props.score} | </span>
        <span className="topScore">Top Score: {this.props.topScore}</span>
      </div>
    )
  }
}

const scoreStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  marginBottom: '10px'
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
  topScore: PropTypes.number.isRequired
}

export default Score;