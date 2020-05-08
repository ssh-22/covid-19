export interface CounterType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface CountdownType {
  id: number;
  target: string;
  target_date: Date | string;
}

export interface CountdownFormType {
  addCountdown: CallableFunction;
}
