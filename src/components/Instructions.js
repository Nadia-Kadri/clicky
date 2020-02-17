import React from 'react';

function Instructions() {
  return (
    <div>
      <h5 style={divStyle}>Click on an image to earn points, but be careful not to click on any more than once!</h5>
    </div>
  )
}

const divStyle = {
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  margin: '10px'
}

export default Instructions;