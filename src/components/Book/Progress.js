import React from 'react';
import ProgressCircle from './ProgressCircle';

const Progress = () => (
  <div className="progress">
    <div className="progressPercent">
      <ProgressCircle className="progressCircle" />
      <p className="percentage">10%</p>
      <p className="completed">Completed</p>
    </div>
  </div>
);

export default Progress;
