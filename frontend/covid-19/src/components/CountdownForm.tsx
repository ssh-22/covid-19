import React, { useState } from "react";
import DatePicker from "./DatePicker";
import TextField from "@material-ui/core/TextField";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

interface CountdownForm {
  addCountdown: CallableFunction;
}

const CountdownForm = ({ addCountdown }: CountdownForm) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;
    addCountdown(value);
    setValue("");
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
        <TextField label="何を" className="countdown form target" />
        <br />
        <DatePicker />
        <br />
        <Button variant="contained" color="primary" className={classes.button}>
          送信
        </Button>
      </form>
    </div>
  );
};

export default CountdownForm;
