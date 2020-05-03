import React, { useState, useEffect } from "react";
import moment from "moment";

interface Counter {
  days: Number;
  hours: Number;
  minutes: Number;
  seconds: Number;
}

interface Countdown {
  target: string;
  targetDate: string;
}

const Countdown = ({ target, targetDate }: Countdown) => {
  const [counter, setCounter] = useState<Counter>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => {
      const diff = moment(targetDate).diff(moment());
      const duration = moment.duration(diff);
      const days = Math.floor(duration.asDays());
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();
      setCounter({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);
  }, [targetDate]);

  return (
    <div className="countdown">
      <span className="target">{target}</span>
      <span> まで あと </span>
      <span className="count">
        <span className="count days">{counter.days}日</span>
        <span className="count hours">{counter.hours}時</span>
        <span className="count minutes">{counter.minutes}分</span>
        <span className="count seconds">{counter.seconds}秒</span>
      </span>
    </div>
  );
};

export default Countdown;
