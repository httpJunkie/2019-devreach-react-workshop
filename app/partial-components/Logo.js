import React from 'react';

const Logo = () => {
  return (
    <div className={`logo`}>
      <span className="k-icon k-i-play"style={
        { marginTop: `-2px`, transform:`rotate(-90deg)` }
      }></span> <span>SpaceX</span>
    </div>
  )
}

export default Logo;