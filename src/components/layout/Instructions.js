import React from 'react';

function Instructions() {
  return (
    <div>
      <h3 style={divStyle}>Click on an image to earn points, but be careful not to click on any more than once!</h3>
    </div>
  )
}

const divStyle = {
  backgroundImage: "linear-gradient(to right, #54B9EA, #C1C8E4)",
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  margin: '0px'
}

export default Instructions;