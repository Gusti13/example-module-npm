import { useState } from "react";

export interface useCounterOption {
  initialValue?: number;
  step?: number;
}

export interface useCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export function useCounter({ initialValue = 0, step = 1 }: useCounterOption): useCounterReturn {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount(prevCount => prevCount + step)

  const decrement = () => setCount(prevCount => prevCount - step)

  return { count, increment, decrement };
}
