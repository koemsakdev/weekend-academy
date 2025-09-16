// This is a client component
'use client';

import { useState, useEffect } from 'react';

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  // Calculate the rotation degrees for each hand
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = ((minutes + seconds / 60) / 60) * 360;
  const hourDeg = ((hours % 12 + minutes / 60) / 12) * 360;

  return (
    <div className="clock-container">
      <div className="clock-face">
        {/* Hour hand */}
        <div 
          className="hand hour-hand" 
          style={{ transform: `rotate(${hourDeg}deg)` }}
        ></div>
        {/* Minute hand */}
        <div 
          className="hand minute-hand" 
          style={{ transform: `rotate(${minuteDeg}deg)` }}
        ></div>
        {/* Second hand */}
        <div 
          className="hand second-hand" 
          style={{ transform: `rotate(${secondDeg}deg)` }}
        ></div>
      </div>
    </div>
  );
};

export default AnalogClock;