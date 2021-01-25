import "./style.css";
import { useState, useEffect } from "react";

const Banner = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-04-24T11:25:00`) - +new Date();
    let timeLeft = {};
    //console.log(new Date().getTime() < new Date(2020,11,10,16,36,0).getTime())
    const date = new Date();
    const timeDate = new Date(2020, 11, 11, 14, 10, 0);
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
    console.log();
    timerComponents.push(
      <span className="digit_time">
        {timeLeft[interval] < 10 && timeLeft[interval] > 0 ? "0" : ""}
        {timeLeft[interval] === 0 ? "00" : timeLeft[interval]}{" "}
        {Object.keys(timeLeft).length - 1 === i ? "" : ":"}
      </span>
    );
  });
  return (
    <div className="container">
      <div className="sliding">
        <span>genius brand</span>
        <span>-</span>
        <span>{timerComponents}</span>
        <span>-</span>
        <span>genius brand</span>
        <span>-</span>
        <span>{timerComponents}</span>
        <span>-</span>
        <span>genius brand</span>
        <span>-</span>
        <span>{timerComponents}</span>
        <span>-</span>
        <span>genius brand</span>
        <span>-</span>
        <span>{timerComponents}</span>
        <span>-</span>
        <span>genius brand</span>
        <span>-</span>
        <span>{timerComponents}</span>
        <span>-</span>
        <span>genius brand</span>
        <span>-</span>
        <span>{timerComponents}</span>
        <span>-</span>
        <span>genius brand</span>
        <span>-</span>
        <span>{timerComponents}</span>
        <span>-</span>
        <span>genius brand</span>
        <span>-</span>
        <span>{timerComponents}</span>
        <span>-</span>
        <span>genius brand</span>
        <span>-</span>
        <span>{timerComponents}</span>
        <span>-</span>
        <span>genius brand</span>
        <span>-</span>
        <span>{timerComponents}</span>
        <span>-</span>
        <span>genius brand</span>
        <span>-</span>
        <span>{timerComponents}</span>
        <span>-</span>
      </div>
    </div>
  );
};

export default Banner;
