import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Animal extends Component {
  render() {
    const { id, name, imageURL } = this.props.animal
    console.log(`${id}   ${name}   ${this.props.animal.click}`)
    return (
      <div>
        <img 
          src={imageURL} alt={name} 
          className="img-responsive" 
          height="15%" 
          width="15%"
          onClick={this.props.onClick.bind(this, id)}
        />
        <div>{name}</div>
      </div>
    )
  }
}

Animal.propTypes = {
  animal: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Animal;