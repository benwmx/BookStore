import React from 'react';
import ProgressCircle from './ProgressCircle';

const Progress = () => (
  <div className="progress">
    <ProgressCircle className="progressCircle" />
    <div className="progressPercent">
      <p className="percentage">10%</p>
      <p className="completed">Completed</p>
    </div>
  </div>
);

export default Progress;
