import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Animal extends Component {
  render() {
    return (
      <div>
        <img 
          src={this.props.animal.imageURL} alt={this.props.animal.name} 
          className="img-responsive" 
          height="15%" 
          width="15%"
          // onClick={onClick}
        />
        <div>{this.props.animal.name}</div>
      </div>
    )
  }
}



Animal.propTypes = {
  animal: PropTypes.object.isRequired
}

export default Animal;