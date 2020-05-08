import React, { useState } from "react";

import DatePicker from "./DatePicker";
import TextField from "@material-ui/core/TextField";
import { CountdownFormType } from "../interfaces";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const CountdownForm = ({ addCountdown }: CountdownFormType) => {
  const [target, setTarget] = useState("緊急事態宣言解除");

  const [target_date, setTargetDate] = useState(
    new Date("2020-05-31T00:00:00")
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!target || !target_date) return;
    addCountdown(target, target_date);
    setTarget("");
  };

  const handleTargetDate = (date: Date) => {
    setTargetDate(date);
  };

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      button: {
        margin: theme.spacing(1),
      },
    })
  );

  const classes = useStyles();

  return (
    <Grid item>
      <form className="countdown form" onSubmit={handleSubmit}>
        <TextField
          label="何を"
          className="countdown form target"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
        <br />
        <DatePicker handleTargetDate={handleTargetDate} />
        <br />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
          onClick={handleSubmit}
        >
          送信
        </Button>
      </form>
    </Grid>
  );
};

export default CountdownForm;
