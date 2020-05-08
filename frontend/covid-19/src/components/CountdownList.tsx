import React, { useState, useEffect } from "react";

import Countdown from "./Countdown";
import CountdownForm from "./CountdownForm";
import { CountdownInterface } from "../interfaces";
import {
  CountdownCreateAPI,
  CountdownDeleteAPI,
  CountdownGetAPI,
} from "../consts";

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

  const [countdowns, setCountdowns] = useState<CountdownInterface[]>([]);

  const addCountdown = (countdown: CountdownInterface) => {
    const target = countdown.target;
    const target_date = countdown.target_date;
    const newCountdown = { target, target_date };
    axios
      .post(CountdownCreateAPI.develop, newCountdown)
      .then((res) => {
        const id: number = res.data.id;
        const newData = { id, ...newCountdown };
        const newCountdowns = [newData, ...countdowns];
        setCountdowns(newCountdowns);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCountdown = (id: number) => {
    axios
      .post(CountdownDeleteAPI.develop, { id })
      .then((res) => {
        console.log(res);
        const newCountdowns = countdowns.filter((e) => e.id !== id);
        setCountdowns(newCountdowns);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchData = async () => {
    const res = await axios.get(CountdownGetAPI.develop);
    const newCountdowns: CountdownInterface[] = res.data;
    setCountdowns(newCountdowns);
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
      <CountdownForm addCountdown={addCountdown} />
      <br />
      <br />
      <Grid item className="countdown-list">
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
                id={countdown.id}
                target={countdown.target}
                target_date={countdown.target_date}
              />
              <IconButton
                color="secondary"
                className={classes.button}
                children={<DeleteIcon />}
                onClick={() => deleteCountdown(countdown.id)}
              />
            </Grid>
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export default CountdownList;
