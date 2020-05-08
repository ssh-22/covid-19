import React, { useState, useEffect } from "react";
import moment from "moment";
import { CounterType, CountdownType } from "../interfaces";

const Countdown = ({ target, target_date }: CountdownType) => {
  const [counter, setCounter] = useState<CounterType>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      const diff = moment(target_date).diff(moment());
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
    return () => {
      clearInterval(timerId);
    };
  }, [target_date]);

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
