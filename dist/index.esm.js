import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { useState } from 'react';

function useCounter(_ref) {
  var _ref$initialValue = _ref.initialValue,
    initialValue = _ref$initialValue === void 0 ? 0 : _ref$initialValue,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 1 : _ref$step;
  var _useState = useState(initialValue),
    _useState2 = _slicedToArray(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  var increment = function increment() {
    return setCount(function (prevCount) {
      return prevCount + step;
    });
  };
  var decrement = function decrement() {
    return setCount(function (prevCount) {
      return prevCount - step;
    });
  };
  return {
    count: count,
    increment: increment,
    decrement: decrement
  };
}

export { useCounter };
//# sourceMappingURL=index.esm.js.map
