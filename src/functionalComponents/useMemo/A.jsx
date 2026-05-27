import React, { useState, useMemo } from "react";

function A() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  // Factorial function
  const fact = (n) => {
    console.log("Factorial function running");
    let result = 1;

    for (let i = 1; i <= n; i++) {
      result = result * i;
    }

    return result;
  };

  // useMemo
  const factorial = useMemo(() => {
    return fact(number);
  }, [number]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>useMemo Example</h2>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <hr />

      <p>Number: {number}</p>
      <p>Factorial: {factorial}</p>
      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>
    </div>
  );
}

export default A;
