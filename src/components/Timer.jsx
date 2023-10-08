import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleReset = () => {
    clearInterval(timer);
    setSeconds(0);
  }

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Timer;
