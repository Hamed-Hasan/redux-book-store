import React from 'react';
import { useAppDispatch, useAppSelector } from './hook';
import { increment, selectCount } from './features/counter/counterSlice';

const CounterComponent: React.FC = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default CounterComponent;
