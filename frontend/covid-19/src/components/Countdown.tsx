import React, { Component } from "react";
import moment from "moment";

type CountdownProps = {
  target: string;
  targetDate: string;
};

class Countdown extends Component<CountdownProps> {
  state = { count: "" };

  componentDidMount() {
    setInterval(() => {
      const diff = moment(this.props.targetDate).diff(moment());
      const duration = moment.duration(diff);
      const days = Math.floor(duration.asDays());
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();
      const count =
        days + "日" + hours + "時" + minutes + "分" + seconds + "秒";
      this.setState({ count });
    }, 1000);
  }

  render() {
    return (
      <div className="countdown">
        <span className="target">{this.props.target}</span>
        <span> まで あと </span>
        <span className="count">{this.state.count}</span>
      </div>
    );
  }
}

export default Countdown;
