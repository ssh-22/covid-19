import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@material-ui/core";

interface CountdownEditForm {
  target: String;
  targetDate: Date;
  addCountdown: CallableFunction;
  // editCountdown: CallableFunction;
  open: boolean;
  handleClose: CallableFunction;
}

const CountdownEditForm = ({
  target,
  targetDate,
  addCountdown,
  // editCountdown,
  open,
  handleClose,
}: CountdownEditForm) => {
  // console.log(editCountdown());
  const handleCancel = () => {
    handleClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log(target);
    e.preventDefault();
    if (!target) return;
    addCountdown(target, targetDate);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent>
        <TextField
          label="何を"
          value={target}
          onChange={(e) => e.target.value}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleCancel}>
          キャンセル
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          送信
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CountdownEditForm;
