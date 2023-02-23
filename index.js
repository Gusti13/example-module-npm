import { useState, useEffect } from "react";

export function useCounter(initialValue, step = 1) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + step);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [step]);

  return count;
}
