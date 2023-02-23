import { useState } from "react";

export function useCounter(initialValue, step = 1) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prevCount => prevCount + step)

  const decrement = () => setCount(prevCount => prevCount - step)

  return { count, increment, decrement };
}
