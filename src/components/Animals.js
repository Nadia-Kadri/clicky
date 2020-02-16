import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animal from './Animal';

class Animals extends Component {
  render() {
    console.log("----------------------")
    const shuffledAnimals = shuffleArray(this.props.animals);
    return (
      shuffledAnimals.map(animal => (
        <Animal onClick={this.props.onClick} key={animal.id} animal={animal}/>
      ))
    )
  }
}

const shuffleArray = array => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

Animals.propTypes = {
  animals: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Animals;