// src/App.js
import React, { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React AWS Counter App</h1>
      <p>Current Count: {count}</p>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}

export default Count;
