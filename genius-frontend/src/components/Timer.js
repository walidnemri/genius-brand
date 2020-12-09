import React, { useEffect, useState } from "react";

const Timer = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-12-24T11:25:00`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className="Timer_interval_container">
        <span className="Timer_digit_time">{timeLeft[interval]} </span>
        <span className="Timer_unit"> {interval} </span>
      </div>
    );
  });
  return (
    <div className="Timer_container">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>Time to the drop!</span>
      )}
    </div>
  );
};

export default Timer;
