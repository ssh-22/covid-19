import React, { useState, useEffect } from "react";
import moment from "moment";

type CountdownProps = {
  target: string;
  targetDate: string;
};

const Countdown = (props: CountdownProps) => {
  const [counter, setCounter] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    setInterval(() => {
    const diff = moment(props.targetDate).diff(moment());
    const duration = moment.duration(diff);
    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();
    setCounter({days: days, hours: hours, minutes: minutes, seconds: seconds})
    }, 1000);
  }, [props.targetDate])

  
  return (
    <div className="countdown">
      <span className="target">{props.target}</span>
      <span> まで あと </span>
      <span className="count">
        <span className="count days">
          {counter.days}日
        </span>
        <span className="count hours">
          {counter.hours}時
        </span>
        <span className="count minutes">
          {counter.minutes}分
        </span>
        <span className="count seconds">
          {counter.seconds}秒
        </span>
      </span>
    </div>
  );
}

export default Countdown;
