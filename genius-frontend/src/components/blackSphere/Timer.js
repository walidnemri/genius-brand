import React, { useEffect, useState } from "react";

const Timer = ({ showImage, showImg1 }) => {
  //console.log(new Date('2020-12-10T16:12:40'))
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-12-24T11:25:00`) - +new Date();
    let timeLeft = {};
   //console.log(new Date().getTime() < new Date(2020,11,10,16,36,0).getTime())
    const date = new Date()
    const timeDate = new Date(2020,11,11,9,41,0)
    if (date.getTime() > timeDate.getTime() && !showImg1) {
       showImage()
    } 
    //console.log(Math.floor((difference / 1000) % 60))
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

  Object.keys(timeLeft).forEach((interval, i) => {
    // if (!timeLeft[interval]) {
    //   return;
    // }
    console.log()
    timerComponents.push(
      <div className="Timer_interval_container">
        <span className="Timer_digit_time">{timeLeft[interval] < 10  && timeLeft[interval] > 0 ? '0':''}{timeLeft[interval] === 0 ? '00': timeLeft[interval]} {Object.keys(timeLeft).length - 1 === i ? '':':'}</span>
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
