/* eslint-disable no-unused-vars */
import React from 'react';

const ProgressCircle = () => {
  const track = {
    strokeWidth: '3',
    stroke: 'lightgrey',
    fill: 'none',
  };
  const progressStyle = {
    strokeWidth: '8',
    stroke: '#0290ff',
    strokeLinecap: 'round',
    fill: 'none',
    transform: 'rotate(270deg)',
    transformOrigin: 'center',
    strokeDasharray: '251.327412287',
    strokeDashoffset: '226.194671058',
  };

  return (
    <svg width="100" height="100">
      <circle r="40" cx="50" cy="50" style={track} />
      <circle r="40" cx="50" cy="50" style={progressStyle} />
    </svg>
  );
};

export default ProgressCircle;
