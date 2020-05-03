import React, { useState } from "react";

import DatePicker from "./DatePicker";
import TextField from "@material-ui/core/TextField";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

interface CountdownForm {
  addCountdown: CallableFunction;
}

const CountdownForm = ({ addCountdown }: CountdownForm) => {
  const [target, setTarget] = useState("緊急事態宣言解除");

  const [targetDate, setTargetDate] = useState(new Date("2020-05-31T00:00:00"));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!target || !targetDate) return;
    addCountdown(target, targetDate);
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
    <div>
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
          onClick={handleSubmit}
        >
          送信
        </Button>
      </form>
    </div>
  );
};

export default CountdownForm;
