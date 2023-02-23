'use strict';

var react = require('react');

function useCounter(initialValue, step = 1) {
  const [count, setCount] = react.useState(initialValue);
  react.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + step);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [step]);
  return count;
}

exports.useCounter = useCounter;
