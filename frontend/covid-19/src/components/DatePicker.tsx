import React from "react";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

type targetDateProps = {
  handleTargetDate: CallableFunction;
};

const DatePicker: React.FC<targetDateProps> = ({
  handleTargetDate,
}: targetDateProps) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date("2020-05-31T00:00:00")
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    handleTargetDate(date);
  };

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          margin="normal"
          label="いつまでに"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          className="countdown form target-date"
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default DatePicker;
