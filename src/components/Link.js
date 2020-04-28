import React from 'react';

const Link = ({ active, children, onClick }) => {
  console.log('Link Component active, children, onClick destructured props', active, children, onClick)
  return (
    <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
  )
}

export default Link