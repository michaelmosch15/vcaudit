import React from 'react';
import './CircularProgressBar.css';

const CircularProgressBar = ({
  size = 300,
  progress = 50,
  strokeWidth = 10,
  circleOneStroke = '#FFFFFF',
  circleTwoStroke = '#335731',
  animate = true,
}) => {
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const decimalProgress = progress / 100;
  const safeProgress = Math.min(Math.max(decimalProgress, 0));

  const strokeDashoffset = circumference - (safeProgress * circumference);

  const circleClass = animate
    ? 'progress-ring__circle'
    : 'progress-ring__circle--stopped';

  return (
    <svg width={size} height={size} className="circular-progress-bar">
      <circle
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        stroke={circleOneStroke}
        fill="none"
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        stroke={circleTwoStroke}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform={`rotate(-90 ${center} ${center})`}
        strokeLinecap="round"
        fill="none"
        className={circleClass}
      />
    </svg>
  );
};

export default CircularProgressBar;