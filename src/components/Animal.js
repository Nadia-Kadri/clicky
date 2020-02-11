import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Animal extends Component {
  render() {
    return (
      <div>
        {this.props.animal.name}
      </div>
    )
  }
}

Animal.propTypes = {
  animal: PropTypes.object.isRequired
}

export default Animal;