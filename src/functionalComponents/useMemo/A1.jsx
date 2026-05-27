import React, { useState, useMemo } from "react";

function A1() {
  const [num, setNum] = useState(5);
  const [count, setCount] = useState(0);

  const factorial = useMemo(() => {
    console.log("Calculating...");
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }
    return result;
  }, [num]);

  return (
    <div>
      <h2>useMemo Example</h2>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <p>Number: {num}</p>
      <p>Factorial: {factorial}</p>
      <button onClick={() => setNum(num + 1)}>
        Increase Number
      </button>
    </div>
  );
}

export default A1;