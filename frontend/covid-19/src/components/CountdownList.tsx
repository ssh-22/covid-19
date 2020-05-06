import React, { useState, useEffect } from "react";

import Countdown from "./Countdown";
import CountdownForm from "./CountdownForm";
import { CountdownType } from "../interfaces";

import axios from "axios";
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

  // @ts-ignore
  const [countdowns, setCountdowns] = useState<CountdownType>([]);

  const addCountdown = (target: string, targetDate: Date) => {
    const newCountdowns = [...countdowns, { target, targetDate }];
    setCountdowns(newCountdowns);
  };

  const deleteCountdown = (countdownIndex: number) => {
    const newCountdowns = [...countdowns];
    newCountdowns.splice(countdownIndex, 1);
    setCountdowns(newCountdowns);
  };

  const fetchData = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/countdown/");
    setCountdowns(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
    >
      {/* <CountdownForm addCountdown={addCountdown} /> */}
      <br />
      <br />
      <Grid item className="countdown-list">
        // @ts-ignore
        {countdowns.map((countdown, index) => (
          <div key={index}>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Countdown
                key={index}
                target={countdown.target}
                targetDate={countdown.targetDate}
              />
              {/* <IconButton
                  color="secondary"
                  className={classes.button}
                  children={<DeleteIcon />}
                  onClick={() => deleteCountdown(index)}
                /> */}
            </Grid>
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export default CountdownList;
