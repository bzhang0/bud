import React from "react";

const ProgressRing = ({
  radius,
  strokeWidth,
  progress,
  color,
  backgroundColor,
  center,
}) => {
  const circumference = 2 * Math.PI * radius;
  const dashOffset = -(circumference - circumference * progress);

  return (
    <>
      {/* Background Ring */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        stroke={backgroundColor}
        fill="none"
        strokeWidth={strokeWidth}
      />
      {/* Progress Ring */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        stroke={color}
        fill="none"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        transform={`rotate(-90 ${center} ${center})`}
      />
    </>
  );
};

export default ProgressRing;
