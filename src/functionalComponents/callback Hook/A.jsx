import React, { useState, useCallback } from "react";
import B from "./B";

function A() {
  const [a, setA] = useState(0);

  console.log("Parent Rendered");

  const handleClick = useCallback(() => {
    console.log("Hello from Parent");
  }, []);

  return (
    <div>
      <h2>Parent: {a}</h2>
      <button onClick={() => setA(a + 1)}>Increase A</button>

      <B value={handleClick} />
    </div>
  );
}

export default A;
