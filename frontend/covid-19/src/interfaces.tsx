export interface CounterType {
  days: Number;
  hours: Number;
  minutes: Number;
  seconds: Number;
}

export interface CountdownType {
  target: string;
  targetDate: Date | string;
}

export interface CountdownFormType {
  addCountdown: CallableFunction;
}
