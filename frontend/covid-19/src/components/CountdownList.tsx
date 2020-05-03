import React from "react";
import Countdown from "./Countdown";

const CountdownList: React.FC = () => {
  return (
    <div className="countdowns">
      <Countdown target="新型コロナ治療薬承認" targetDate="2020-05-31" />
      <Countdown
        target="新型コロナ迅速検査キット承認"
        targetDate="2020-06-30"
      />
      <Countdown target="2020年東京オリンピック開幕" targetDate="2021-07-23" />
      <Countdown target="新型コロナ収束" targetDate="2022-12-01" />
    </div>
  );
};

export default CountdownList;
