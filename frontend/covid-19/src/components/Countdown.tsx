import React, { useState, useEffect } from "react";
import moment from "moment";

type CountdownProps = {
  target: string;
  targetDate: string;
};

const Countdown = (props: CountdownProps) => {
  const [count, setCount] = useState("")

  useEffect(() => {
    setInterval(() => {
    const diff = moment(props.targetDate).diff(moment());
    const duration = moment.duration(diff);
    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();
    setCount(days + "日" + hours + "時" + minutes + "分" + seconds + "秒");
    }, 1000);
  }, [props.targetDate])

  

  return (
    <div className="countdown">
      <span className="target">{props.target}</span>
      <span> まで あと </span>
      <span className="count">{count}</span>
    </div>
  );
}

export default Countdown;
