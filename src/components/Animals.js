import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animal from './Animal';

class Animals extends Component {
  render() {
    console.log("----------------------")
    return ( 
      this.props.animals.map(animal => (
        <Animal onClick={this.props.onClick} key={animal.id} animal={animal}/>
      ))
    )
  }
}

Animals.propTypes = {
  animals: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Animals;