import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div style={clickyStyle}>Clicky Game</div>
        <div style={instructStyle}>{this.props.header}</div>
        <div style={scoreStyle}>
          <span className="currentScore">Current Score: {this.props.score} | </span>
          <span className="topScore">Top Score: {this.props.topScore}</span>
        </div>
      </nav>
    )
  }
}

const clickyStyle = {
  float: 'left',
  width: '33.33%',
  fontSize: '20px'
}

const instructStyle = {
  float: 'left',
  width: '33.33%',
  textAlign: 'center',
  fontSize: '15px'
}

const scoreStyle = {
  float: 'left',
  width: '33.33%',
  textAlign: 'right', 
  fontSize: '20px'
}

Header.propTypes = {
  score: PropTypes.number.isRequired,
  topScore: PropTypes.number.isRequired,
  header: PropTypes.string.isRequired,
}

export default Header;