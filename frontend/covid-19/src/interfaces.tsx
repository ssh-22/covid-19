export interface CounterInterface {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface CountdownInterface {
  id: number;
  target: string;
  target_date: Date | string;
}

export interface CountdownFormInterface {
  addCountdown: CallableFunction;
}

export interface targetDateProps {
  handleTargetDate: CallableFunction;
}
