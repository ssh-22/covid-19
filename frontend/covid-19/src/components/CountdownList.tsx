import React, { useState } from "react";
import Countdown from "./Countdown";
import CountdownForm from "./CountdownForm";

const CountdownList: React.FC = () => {
  const [countdowns, setCountdowns] = useState([
    { target: "新型コロナ治療薬承認", targetDate: "2020-05-31" },
    { target: "新型コロナ迅速検査キット承認", targetDate: "2020-06-30" },
    { target: "2020年東京オリンピック開幕", targetDate: "2021-07-23" },
    { target: "新型コロナ収束", targetDate: "2022-12-01" },
  ]);

  const addCountdown = (target: string, targetDate: string) => {
    const newCountdowns = [...countdowns, { target, targetDate }];
    setCountdowns(newCountdowns);
  };

  return (
    <div>
      <div className="countdown-list">
        {countdowns.map((countdown, index) => (
          <Countdown
            key={index}
            target={countdown.target}
            targetDate={countdown.targetDate}
          />
        ))}
      </div>
      <br />
      <CountdownForm addCountdown={addCountdown} />
    </div>
  );
};

export default CountdownList;
