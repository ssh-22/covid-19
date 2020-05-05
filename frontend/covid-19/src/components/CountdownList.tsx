import React, { useState } from "react";
import Countdown from "./Countdown";
import CountdownForm from "./CountdownForm";

import { Grid, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
const CountdownList: React.FC = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      button: {
        margin: theme.spacing(1),
      },
    })
  );

  const classes = useStyles();

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

  const deleteCountdown = (countdownIndex: number) => {
    countdowns.splice(countdownIndex, 1);
    const newCountdowns = [...countdowns];
    setCountdowns(newCountdowns);
  };

  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
    >
      <CountdownForm addCountdown={addCountdown} />
      <br />
      <br />
      <Grid item className="countdown-list">
        {countdowns
          .map((countdown, index) => (
            <div key={index}>
              <Countdown
                key={index}
                target={countdown.target}
                targetDate={countdown.targetDate}
              />
              <IconButton
                color="secondary"
                className={classes.button}
                children={<DeleteIcon />}
                onClick={() => deleteCountdown(index)}
              ></IconButton>
            </div>
          ))
          .reverse()}
      </Grid>
    </Grid>
  );
};

export default CountdownList;
