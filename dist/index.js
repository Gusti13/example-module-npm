'use strict';

var react = require('react');

function useCounter(initialValue, step = 1) {
  const [count, setCount] = react.useState(initialValue);
  const increment = () => setCount(prevCount => prevCount + step);
  const decrement = () => setCount(prevCount => prevCount - step);
  return {
    count,
    increment,
    decrement
  };
}

exports.useCounter = useCounter;
