import React from "react";
import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };

  const minCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={addCount}>+</button>
      <h1>{count}</h1>
      <button onClick={minCount}>-</button>
    </div>
  );
};

export default Count;
