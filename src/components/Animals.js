import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animal from './Animal';

class Animals extends Component {
  render() {
    return ( 
      this.props.animals.map(animal => (
        <Animal animal={animal}/>
      ))
    )
  }
}

Animals.propTypes = {
  animals: PropTypes.array.isRequired
}

export default Animals;