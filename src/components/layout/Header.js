import React from 'react';

function Header() {
  return (
    <header>
      <h1 style={headerStyle}>Clicky Game!</h1>
    </header>
  )
}

const headerStyle = {
  backgroundImage: "linear-gradient(to right, #54B9EA, #C1C8E4)",
  // background: '#54B9EA',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  margin: '0px'
}

export default Header;