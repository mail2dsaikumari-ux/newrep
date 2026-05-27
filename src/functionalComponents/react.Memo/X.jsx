import React, { useState } from "react";
import Y from "./Y";

const X = React.memo(() => {
  const [X, setX] = useState(0);

  console.log("X component");

  return (
    <div>
      <h3>X Component</h3>
      <button onClick={() => setX(X + 1)}>Click</button>
      <br />
      <Y value={X} />
    </div>
  );
});

export default X;