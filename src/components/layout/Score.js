import React, { Component } from 'react';

class Score extends Component {
  render() {
    return (
      <div>
        <span className="currentScore">Current Score: | </span>
        <span className="topScore">Top Score: </span>
      </div>
    )
  }
}

export default Score;