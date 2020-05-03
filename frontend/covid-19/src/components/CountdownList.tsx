import React, { useState } from "react";
import Countdown from "./Countdown";
import CountdownForm from "./CountdownForm";

const CountdownList: React.FC = () => {
  const [countdowns, setCountdowns] = useState([
    {
      target: "新型コロナ治療薬承認",
      targetDate: new Date("2020-05-31T00:00:00"),
    },
    {
      target: "新型コロナ迅速検査キット承認",
      targetDate: new Date("2020-06-30T00:00:00"),
    },
    {
      target: "2020年東京オリンピック開幕",
      targetDate: new Date("2021-07-23T00:00:00"),
    },
    { target: "新型コロナ収束", targetDate: new Date("2022-12-01T00:00:00") },
  ]);

  const addCountdown = (target: string, targetDate: Date) => {
    const newCountdowns = [...countdowns, { target, targetDate }];
    setCountdowns(newCountdowns);
  };

  return (
    <div>
      <div className="countdown-list">
        {countdowns.map((countdown, index) => (
          <div key={index}>
            <Countdown
              key={index}
              target={countdown.target}
              targetDate={countdown.targetDate}
            />
            <br />
          </div>
        ))}
      </div>
      <br />
      <br />
      <CountdownForm addCountdown={addCountdown} />
    </div>
  );
};

export default CountdownList;
